<template>
  <div>
    <a-row>
      <a-col :span="1"></a-col>
      <a-col :span="3">prometheus-book</a-col>
      <a-col :span="16">
        <vue-markdown :source="content"># Prometheus
注：文档仅记录在linux下进行的一系列操作；
安装前准备：
1. 安装wget，用于下载文件，命令：yuminstallwget-y
2. 安装lrzsz，用于上传文件资料，命令：yuminstalllrzsz-y
3. 如果要跨机器访问需要开启端口号，在root用户下使用命令（0000表示要开启的端口号）：
firewall-cmd—zone=public—add-port=0000/tcp—permanent
firewall-cmd—reload
---
# Prometheus介绍：
Prometheus受启发于Google的Brogmon监控系统（相似的Kubernetes是从Google的Brog系统演变而来），从2012年开始由前Google工程师在Soundcloud以开源软件的形式进行研发，并且于2015年早期对外发布早期版本。2016年5月继Kubernetes之后成为第二个正式加入CNCF基金会的项目，同年6月正式发布1.0版本。2017年底发布了基于全新存储层的2.0版本，能更好地与容器平台、云平台配合。
[image:45714DD0-9DE4-4FE5-87E2-1B7CB408E652-1812-000010654D0AE6FD/1563506312050-5a894474-8970-4b97-b673-b7bea7e2c804.png]
Prometheus核心部分只有一个单独的二进制文件，不存在任何的第三方依赖(数据库，缓存等等)。唯一需要的就是本地磁盘，因此不会有潜在级联故障的风险。
Prometheus基于Pull模型的架构方式，可以在任何地方（本地电脑，开发环境，测试环境）搭建我们的监控系统。对于一些复杂的情况，还可以使用Prometheus服务发现(Service Discovery)的能力动态管理监控目标。
所有采集的监控数据均以指标(metric)的形式保存在内置的时间序列数据库当中(TSDB)。所有的样本除了基本的指标名称以外，还包含一组用于描述该样本特征的标签。
每一条时间序列由指标名称(Metrics Name)以及一组标签(Labels)唯一标识。每条时间序列按照时间的先后顺序存储一系列的样本值。
表示维度的标签可能来源于你的监控对象的状态，比如code=404或者content_path=/api/path。也可能来源于的你的环境定义，比如environment=produment。基于这些Labels我们可以方便地对监控数据进行聚合，过滤，裁剪。
Prometheus内置了一个强大的数据查询语言PromQL。通过PromQL可以实现对监控数据的查询、聚合。同时PromQL也被应用于数据可视化(如Grafana)以及告警当中。
通过PromQL可以轻松回答类似于以下问题：
	* 在过去一段时间中95%应用延迟时间的分布范围
	* 预测在4小时后，磁盘空间占用大致会是什么情况
	* CPU占用率前5位的服务有哪些(过滤)
对于监控系统而言，大量的监控任务必然导致有大量的数据产生。而Prometheus可以高效地处理这些数据，对于单一Prometheus Server实例而言它可以处理：
	* 数以百万的监控指标
	* 每秒处理数十万的数据点
---
## Prometheus生态结构：
Prometheus 生态结构图如下所示：
[image:5A8E7545-B89B-4C0F-8995-7A4DD814E47D-1812-0000107A64BEC9C6/1563506111078-4e0ef63f-1699-4c6d-9427-cb679be94072.png]
Prometheus 获取服务数据的方式有两种：pull和push两种模式，默认支持pull模式，配置简单，操作容易，配合一系列的Exporter可以很容易获取metircs接口数据，push模式需要pushgateway的支持，且需要自己实现一些操作，包括数据添加、更新、删除操作的数据到prometheus的pushgateway中，官方对push模式这样说的：

[image:1C9F1ED1-95C1-4637-99D7-2366FEBF0B0F-1812-0000108A0A597F49/1563506194010-2cc80dc9-6bdc-47e8-b3a7-9f2ce1917581.png]
[image:DFC695DB-A299-4EB7-8C2E-DEDA1B788F58-1812-0000108A0A6CBC9F/1563506221238-8f1a442b-b7c2-4ba2-8211-f42c451e7ff5.png]
使用Pushgateway有几个缺陷：
	* 通过单个Pushgateway监控多个实例时，Pushgateway成为单点故障和潜在瓶颈。
	* 您通过up指标（每次刮除时生成）丢失了Prometheus的自动实例运行状况监控。
	* Pushgateway永远不会忘记推送到它的系列，并将永远暴露给Prometheus，除非这些系列是通过Pushgateway的API手动删除的。
---
</vue-markdown>
      </a-col>
      <a-col :span="4">
        <a-anchor>
          <a-anchor-link href="#f" title="Basic demo" />
          <a-anchor-link href="#x" title="Fixed demo" />
          <a-anchor-link href="#API" title="API">
            <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
            <a-anchor-link href="#Link-Props" title="Link Props" />
          </a-anchor-link>
        </a-anchor>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown"; //直接作为一个组件引入

export default {
  components: {
    VueMarkdown // 声明组件
  },
  data() {
    return {
      content: "neirong"
    };
  }
};
</script>
