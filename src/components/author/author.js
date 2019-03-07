import React from 'react'
import './author.css'
export function Author(){
    return(
        <div>
            <img src="http://45.76.2.56:3001/static/image/avator.jpg" className="avator" alt="作者头像"></img>
            <div className="person-desc">
                <header className="person-name">王肖添</header>
                <p className="person-info">王肖添，男，1991年11月生于辽宁省沈阳市。2014年在东北大学信息科学与技术学院获得通信工程学士学位，2017年在大连海事大学信息科学技术学院获得电子与通信工程硕士学位。
                2016年1月至2016年12月在SAP实习，从事ABAP开发和JAVA开发。2017年7月加入东软集团股份有限公司，在医疗IT事业部从事前端开发岗位（web），任职期间主要是做移动端web医疗影像系统。2018年7月离职，
                来到北京，加入北京斗米优聘科技发展有限公司，从事微信小程序开发。</p>
            </div>
        </div>
    )
}