
import request from '@/utils/request.js' 
//needToken 需要使用Token true/false
//request.post(url,参数,{needToken: true})
// 获取首页·配置
export function getConfig(){
	return request.get("")
}
//获取活动详情
export function getByActivity(id){
	return request.get(``)
}
//预约提交
export function submit(data){
	return request.post("",data,{needToken: true})
} 
//获取订单
export function queryOderList(openId){
	return request.get(``,{needToken: true})
}
//订单详情
export function queryOder(openId,id){
	return request.get(``,{needToken: true})
}



// 微信用户登录
export function customUserLogin(data){
	return request.post("",data)
} 
// 请求七牛云token接口
export function getQiniuyunToken(data){
	return request.post("",data,{needToken: true})
} 
//上传头像和昵称
export function saveHeadImg(data){
	return request.post("",data,{needToken: true})
} 

// 活动更新
export function getEndActivities(){
	return request.get(``)
}
// 获取轮播
export function getRotations(){
	return request.get(``)
}
// 根据轮播id查询详情信息
export function getByRotations(id){
	return request.get(``)
}


