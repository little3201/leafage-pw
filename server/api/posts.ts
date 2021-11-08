// url prefix
const URL_PREFIX = "/assets/posts"

export default () => {
    return [
        {
            "code": "21328R4IT",
            "modifyTime": "2021-06-06T20:59:23.594",
            "title": "Leafage 诞生记（五、nuxt.js 页面初始化加载优化）",
            "subtitle": "近日，对于leafage 网站进行了一些测验和优化，主要内容包括首页加载耗时，seo的一些主要的优化",
            "cover": "https://cdn.leafage.top/highway-4494907_640.jpg",
            "tags": [
                "leafage",
                "nuxt.js",
                "async",
                "优化",
                "axios",
                "promise"
            ],
            "category": "Experience",
            "likes": 0,
            "comment": 0,
            "viewed": 480
        },
        {
            "code": "21A133QUD",
            "modifyTime": "2021-10-15T09:38:11.123",
            "title": "JVM - 类的生命周期",
            "subtitle": "一个类从被加载到虚拟机内存中开始，到卸载出内存为止，它的整个生命周期将会经历加载、验证、准备、解析、初始化、使用和卸载七个阶段，其中验证、准备、解析统称为连接",
            "cover": "https://cdn.leafage.top/dna-gc901094a3.jpg",
            "tags": [
                "jvm",
                "生命周期",
                "连接",
                "加载",
                "初始化"
            ],
            "category": "Technology",
            "likes": 0,
            "comment": 0,
            "viewed": 54
        },
        {
            "code": "21918I8M5",
            "modifyTime": "2021-10-13T20:36:27.577",
            "title": "SecurityRandom的getInstanceStrong() 阻塞问题",
            "subtitle": "Securityrandom.getInstanceStrong()这个方法来获取Random对象，在Linux 环境下，获取到六位随机数，就会出现阻塞的问题",
            "cover": "https://cdn.leafage.top/field-6558125.jpg",
            "tags": [
                "阻塞",
                "随机数",
                "getInstanceStrong",
                "SecurityRandom"
            ],
            "category": "Experience",
            "likes": 2,
            "comment": 0,
            "viewed": 71
        },
        {
            "code": "21A13YXCB",
            "modifyTime": "2021-10-13T20:14:49.719",
            "title": "JVM - 垃圾回收器",
            "subtitle": "Java 内存运行时区域的各个部分，其中程序计数器、虚拟机栈、本地方法栈3个区域随线程而生，随线程而灭；栈中的栈帧随着方法的进入和退出而有条不紊地执行着出栈和入栈操作，每个栈帧中分配多少内存基本上是类",
            "cover": "https://cdn.leafage.top/building-g78a154db4.jpg",
            "tags": [
                "jvm",
                "ParNew",
                "Serial",
                "垃圾回收器",
                "Parallel",
                "GC"
            ],
            "category": "Technology",
            "likes": 0,
            "comment": 0,
            "viewed": 28
        },
        {
            "code": "21A138W45",
            "modifyTime": "2021-10-13T20:04:52.577",
            "title": "JVM - 垃圾回收算法",
            "subtitle": "给对象添加一个引用计数器，当有一个地方引用它，计数器加1，当一个引用失效，计数器减1，任何时候计数器值为0的对象就是不可能再被使用的",
            "cover": "https://cdn.leafage.top/background-g43c1a8308.jpg",
            "tags": [
                "jvm",
                "算法",
                "垃圾回收",
                "GC"
            ],
            "category": "Technology",
            "likes": 0,
            "comment": 0,
            "viewed": 37
        },
        {
            "code": "21A12SGK3",
            "modifyTime": "2021-10-12T08:48:14.58",
            "title": "关于开源项目的规划",
            "subtitle": "几个项目已经做了挺久了，一直在断断续续的更新，完善中，现在雏形已出，最最基本的信息操作接口都有了，下一步的方向，如何去走...",
            "cover": "https://cdn.leafage.top/road-g13dfc2295.jpg",
            "tags": [
                "leafage",
                "想法",
                "规划"
            ],
            "category": "Thinking",
            "likes": 0,
            "comment": 0,
            "viewed": 40
        },
        {
            "code": "20C25YW6T",
            "modifyTime": "2021-09-26T08:28:26.3",
            "title": "nginx 如何配置详解",
            "subtitle": "nginx是个功能强大，性能彪悍的反向代理工具",
            "cover": "https://cdn.leafage.top/proxy-5301801_640.jpg",
            "tags": [
                "server",
                "配置",
                "nginx",
                "nginx.conf",
                "http",
                "location",
                "events"
            ],
            "category": "Technology",
            "likes": 7,
            "comment": 0,
            "viewed": 614
        },
        {
            "code": "20815YW6T",
            "modifyTime": "2021-09-23T16:38:35.761",
            "title": "Mybatis批量操作sql写法",
            "subtitle": "使用mybatis时，如何自定义实现批量操作数据，SQL如何编写，其中需要注意的点有哪些",
            "cover": "https://cdn.leafage.top/data-4404730_640.jpg",
            "tags": [
                "mybatis",
                "batch",
                "insert",
                "update",
                "批量",
                "sql"
            ],
            "category": "Technology",
            "likes": 12,
            "comment": 1,
            "viewed": 1326
        },
        {
            "code": "21414BX0U",
            "modifyTime": "2021-09-18T09:05:12.981",
            "title": "vue3+typescript上传文件到七牛云",
            "subtitle": "七牛云js-sdk上传文件，本地js生成token，直传模式上传文件到七牛云",
            "cover": "https://cdn.leafage.top/snowdrop.jpg",
            "tags": [
                "qiniu-js",
                "前端上传",
                "vue.js",
                "vue3",
                "七牛云",
                "上传"
            ],
            "category": "Technology",
            "likes": 4,
            "comment": 1,
            "viewed": 434
        },
        {
            "code": "21818P30W",
            "modifyTime": "2021-08-18T10:35:28.134",
            "title": "JVM运行时数据区",
            "subtitle": "JVM 的运行时数据区分为： 程序计数器； 虚拟机栈； 本地方法栈； 堆； 方法区； 其中堆、方法区是线程共享的，程序计数器、虚拟机栈、本地方法栈是线程隔离的...",
            "cover": "https://cdn.leafage.top/a-candle-g7930a4d11.jpg",
            "tags": [
                "JVM",
                "栈帧",
                "方法区",
                "堆",
                "程序计数器",
                "栈"
            ],
            "category": "Technology",
            "likes": 4,
            "comment": 1,
            "viewed": 206
        },
        {
            "code": "21811W1F6",
            "modifyTime": "2021-08-13T10:12:40.483",
            "title": "Activiti7事件监听",
            "subtitle": "ctiviti 中每个流程信息是通过 ProcessInstance 描述，它有这么几个状态：created、started、completed、cancelled、resumed、updated。",
            "cover": "https://cdn.leafage.top/godfather.jpg",
            "tags": [
                "工作流",
                "监听器",
                "listener",
                "activiti7"
            ],
            "category": "Technology",
            "likes": 2,
            "comment": 1,
            "viewed": 234
        },
        {
            "code": "21628W63S",
            "modifyTime": "2021-06-28T15:13:53.705",
            "title": "Mongo 服务重启异常问题记录",
            "subtitle": "启动/重启Mongodb服务，发生异常：mongod.service: control process exited, code=exited status=1的处理步骤",
            "cover": "https://cdn.leafage.top/man-6339003.jpg",
            "tags": [
                "repair",
                "restart",
                "mongodb"
            ],
            "category": "Experience",
            "likes": 3,
            "comment": 1,
            "viewed": 275
        },
        {
            "code": "21622MARQ",
            "modifyTime": "2021-06-22T10:46:56.424",
            "title": "NoClassDefFoundError：GenericObjectPoolConfig 问题",
            "subtitle": "记录一个redis的异常，今天更新测试环境的服务，该服务中使用了 spring-boot-starter-data-redis 的依赖，在发布测试的时候报错了，很尴尬。为啥呢，我本地运行的好好的呀。",
            "cover": "https://cdn.leafage.top/skateboarding-6310245.jpg",
            "tags": [
                "NoClassDefFoundError",
                "GenericObjectPoolConfig",
                "LettuceConnectionFactory",
                "redis"
            ],
            "category": "Experience",
            "likes": 14,
            "comment": 0,
            "viewed": 202
        },
        {
            "code": "21697I2R",
            "modifyTime": "2021-06-09T17:12:17.783",
            "title": "Spring Security 密码验证动态加盐的验证处理",
            "subtitle": "在UserDetailsService接口的findByUsername()方法中，在返回UserDetails实现的时候，使用默认实现User的UserBuilder内部类来解决这个问题",
            "cover": "https://cdn.leafage.top/fingerprint-2904774.jpg",
            "tags": [
                "spring",
                "passwordEncoder",
                "security",
                "webflux",
                "gateway"
            ],
            "category": "Technology",
            "likes": 2,
            "comment": 1,
            "viewed": 244
        },
        {
            "code": "2166UU6X",
            "modifyTime": "2021-06-06T22:15:39.224",
            "title": "Spring RestTemplate模版用法",
            "subtitle": "spring 提供有一个用来进行接口请求的模版工具，restTemplate，支持restful各种请求。",
            "cover": "https://cdn.leafage.top/bed-1836316_640.jpg",
            "tags": [
                "spring",
                "template",
                "post",
                "get",
                "delete",
                "put",
                "resttemplate"
            ],
            "category": "Technology",
            "likes": 2,
            "comment": 0,
            "viewed": 244
        }
    ]
}