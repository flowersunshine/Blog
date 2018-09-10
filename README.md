### 这个系统的由来
一天和朋友聊天，期间聊到博客，他是一个比较喜欢学习的人，对代码也是有种特别的感情，就暂且成为感情吧。从那之后我就在想，自己是不是应该也平时有时间的时候写写博客，答案是肯定的，然后我就想是要用市面上的博客系统写博客还是要自己搭建一个，当时并没有想自己写一个，由于自己翻墙的需要，所以买了一台虚拟机。于是想想要不然还是自己搭建一个吧，正好有现成的机器可供使用。于是来到了思考的第二阶段，是要用开源的写好的博客系统还是自己写一个，最开始的尝试是用开源的博客系统，但是当我开始搭建之后发现，要读一大堆的文档，而且大部分还是英文的，后台还是用php写的，本人对php一无所知，而且不想学习php，同时正好当时自己在学习react，当初学习vue的时候搭配网易云音乐的后台写了一个vue实现的网易云音乐，那现在为什么不用react实现一个博客系统，于是决定写一个博客系统。
### 该系统前端使用到的东西
- React
- axios 用来与后台通信
- ant design UI组件
- React Router 进行路由跳转
这就是目前的用到的东西，以后会考虑加进来Redux（先容我学习学习，一步一步来）
### 写这个博客前端时的一些想法
如果你也想写一个自己的博客系统的话我这里提几个建议:
- 尽量在同一个时间段不要强迫自己学习太多的东西，要不然会感觉一头雾水的感觉，打消自己学习的积极性
- 我在最开始写这个博客系统的时候想直接把redux就加进来，然后再加服务端渲染。不过我之前无论是angular还是vue都没有使用过redux，在很多地方上让我感到有太多不熟悉的地方，所以我决定先不使用redux，分三步。第二步加redux，第三步加服务端渲染。这让我在开发第一步的时候只需要适应React，不需要考虑其他的东西。
### 在React中加入scss的步骤
这里介绍的是用create-react-app创建工程来引入scss的方法，对于其他方式创建的工程我不知道是否适用。
1. 首先不管适用什么方式创建工程，肯定都需要引入scss的相关依赖 npm install sass-loader node-sass --save-dev
2. 进行webpack.config的配置，直接在文件中引入scss
    找到node_modules/react-scripts/config/webpack.config.dev.js文件和webpack.config.prod.js文件（两个文件都要改）,将module配置项的最后一项配置改成如下：
    <pre>
        { 
            loader: require.resolve('file-loader'),
            loaders. exclude: [/\.js$/, /\.html$/, /\.json$/,/\.scss$/],
            options: { name: 'static/media/[name].[hash:8].[ext]',
        },
        {
            test: /\.scss$/, 
            loaders: ['style-loader', 'css-loader', 'sass-loader'], 
        }
    </pre>
3. 在package.json中添加build-css，watch-css
    "build-css": "node-sass-chokidar src/ -o src/"
    

### 有任何问题可以给我发邮件wang_xiao_tian@126.com，我们一起探讨技术，一起进步，谢谢