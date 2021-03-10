import React, { Component } from 'react';
import { _fetch } from './../utils/request'

interface IProps {

}

interface IState {
	/**
	 * 封面图片
	 */
	coverPic: string
}

class index extends Component<IProps, IState> {

	constructor(props: any) {
		super(props)
		this.state = {
			coverPic: ''
		}
	}

	componentDidMount() {
		const url = import.meta.env.VITE_API
		console.log('接口url前缀', url)
		_fetch({
			url: `${url}/topic/detail?actid=111551188`,
			method: 'GET'
		}).then((res: any)=>{
			console.log('页面请求结果', res)
			this.setState({
				coverPic: res.act.coverMobileUrl
			})
		})
	}

	render() {
		const { coverPic } = this.state
		return (
			<div>
				coverPic
				<img src={coverPic} />
			</div>
		);
	}
}

export default index;
