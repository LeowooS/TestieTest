// @/utils/request.js
import {
	VUE_APP_RESOURCES_URL,
	VUE_APP_API_URL,
	VUE_APP_IMG_URL
} from '@/config'
// #ifdef MP-WEIXIN
const baseURL = VUE_APP_API_URL
// #endif 

const timeout = 5000

// 封装api请求
const request = function(option){ 
	console.log('请求参数',option)
	// 获取用户传入的url
	var url = baseURL + option.url; 
	 
	// 添加提请求头
	var  header = option.header||{}
	if(!!option.needToken){
		// 添加token 
		header['X-Token'] =  'Bearer ' +  uni.getStorageSync('token');  
	}
	header.source=1;
	header.channel="h5";
	
	// 加载提示
	var loading = option.loading;
	// 如果有loading就显示loading
	if(loading){
		uni.showLoading(loading)
	}
  
  // 返回一个promise
	return new Promise((resolve,reject)=>{  
		// 发起一个request请求
		uni.request({
			url, //请求url
			method:option.method||"GET", //请求方法
			header, //请求头
			timeout,
			data:option.data||option.params, //请求数据
			success(res){
				console.log('状态',res)
				// 成功返回结果
				if(res.statusCode===200){
					resolve(res.data)
					// 如果是101 没有权限
					if(res.data.code==101){
						uni.showToast({
							title: res.data.msg,
							icon:'none'
						})
						// uni.redirectTo({
						// 	url: '/pages/login/index',
						// })
					}
					if(res.data.code!=20000&&res.data.code!=0){
						uni.showToast({
							icon:'none',
							title:res.data.msg||'请求错误'
						})
						resolve(res.data)
					}
					if(res.data.code==500){
						// console.log('11111111111',res.data);
						if(res.data.data == 403){
							setTimeout(res=>{
								uni.clearStorageSync();
								uni.switchTab({
									url:"/pages/index/index"
								})
							},1000)
						}
						// if(res.data.msg == '请求参数异常，请重新登陆小程序！'){
						// 	setTimeout(res=>{
						// 		uni.clearStorageSync();
						// 		uni.switchTab({
						// 			url:"/pages/index/index"
						// 		})
						// 	},1000)
						// }
						// console.log('SSS',res.data)
					}
				} 
				if(res.statusCode != 200){
					uni.showToast({
						icon:'none',
						title:'请求失败!'
					})
					// reject(res.data)
				}
			},
			fail(err){
				// 失败返回失败结果
				uni.showToast({
					title: '请求失败',
					icon:'error'
				})
				console.error(err);
				reject(err)
			},
			complete(){
				// 完成 关闭loading
				if(loading){
					uni.hideLoading()
				}
			}
		})
	})
}

// 定义get简洁方法
request.get=function(url,config){
	return  request({
		url,
		method:"GET",
		...config
	})
}

// // 定义post简洁方法
request.post=function(url,data,config){
	return  request({
		url,
		method:"POST",		
		...config,
		data
	})
}
// 导出请求
export default request;
