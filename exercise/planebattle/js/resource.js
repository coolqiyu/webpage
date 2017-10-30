/**
 * 资源的加载是异步的，加载完成后执行回调函数
 */
var resourceHelper = {
	/**
	 * 加载图片
	 */
	 imageLoader: function(src, callback){
	 	var image = new Image();
	 	image.addEventListener('load', callback);
	 	image.addEventListener('error', function(){
	 		console.log('imageerror');
	 	});
	 	image.src = src;
	 	return image;
	 },
	 getImage: function(imageName){
	 	return this.resources.images[imageName];
	 },
	 getSound: function(soundName){
	 	return this.resources.sounds[soundName];
	 },
	 load: function(resources, callback){
	 	var images = resources.images;
	 	var sounds = resources.sounds;
	 	var total = images.length;
	 	var finish = 0;
		//存储加载的资源
		this.resources = {
			images:{},
			sounds:{}
		};
		var self = this;

		//遍历加载图片
		for(var i = 0; i < images.length; i++){
			var name = images[i].name;
			var src = images[i].src;
			//加载src资源，完成load后，回调更新数据
			self.resources.images[name] = self.imageLoader(src, function(){
				finish++;
				//全部加载完成后，回调，把resources传出去
				if(finish == total){
					callback(self.resources);
				}
			});
		}
		//遍历加载音乐
		for(var i = 0, len = sounds.length; i < len; i++){
			var name = sounds[i].name;
			var src = sounds[i].src;
			self.resources.sounds[name] = src;
		}
	}
}