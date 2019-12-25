<template>
  <v-row :gutter="20" justify="center">
    <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="6">
      <v-card>
        <div style="display: flex;">
          <h3>
            <i class="el-icon-document-copy"></i>翻译文档
          </h3>
          <div style="flex-grow: 1;"></div>
          <a :underline="false" style="top: 4px;">查看原文</a>
        </div>
        <h2>《Prometheus》</h2>
        <p v-html="content"></p>
      </v-card>
    </v-col>
    <v-col cols="12" xs="0" sm="0" md="4" lg="4" xl="3">
      <v-card style="margin-bottom: 20px;">
        <div>
          <h3>
            <i class="el-icon-notebook-2"></i>《Prometheus》
          </h3>
        </div>
        <div>
          <p>概览</p>
          <p>开始</p>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'introduce',
  components: {
  },
  data () {
    return {
      content: '<h1>Prometheus</h1><p>注：文档仅记录在linux下进行的一系列操作；<br>安装前准备： </p><ol> <li>安装wget，用于下载文件，命令：yuminstallwget-y</li><li>安装lrzsz，用于上传文件资料，命令：yuminstalllrzsz-y</li><li>如果要跨机器访问需要开启端口号，在root用户下使用命令（0000表示要开启的端口号）：<br>firewall-cmd—zone=public—add-port=0000/tcp—permanent<br>firewall-cmd—reload</li></ol> <hr> <h1 id="h1-prometheus-"><a name="Prometheus介绍：" class="reference-link"></a><span class="header-link octicon octicon-link"></span>Prometheus介绍：</h1><p>Prometheus受启发于Google的Brogmon监控系统（相似的Kubernetes是从Google的Brog系统演变而来），从2012年开始由前Google工程师在Soundcloud以开源软件的形式进行研发，并且于2015年早期对外发布早期版本。2016年5月继Kubernetes之后成为第二个正式加入CNCF基金会的项目，同年6月正式发布1.0版本。2017年底发布了基于全新存储层的2.0版本，能更好地与容器平台、云平台配合。<br>Prometheus核心部分只有一个单独的二进制文件，不存在任何的第三方依赖(数据库，缓存等等)。唯一需要的就是本地磁盘，因此不会有潜在级联故障的风险。<br>Prometheus基于Pull模型的架构方式，可以在任何地方（本地电脑，开发环境，测试环境）搭建我们的监控系统。对于一些复杂的情况，还可以使用Prometheus服务发现(Service Discovery)的能力动态管理监控目标。<br>所有采集的监控数据均以指标(metric)的形式保存在内置的时间序列数据库当中(TSDB)。所有的样本除了基本的指标名称以外，还包含一组用于描述该样本特征的标签。<br>每一条时间序列由指标名称(Metrics Name)以及一组标签(Labels)唯一标识。每条时间序列按照时间的先后顺序存储一系列的样本值。<br>表示维度的标签可能来源于你的监控对象的状态，比如code=404或者content_path=/api/path。也可能来源于的你的环境定义，比如environment=produment。基于这些Labels我们可以方便地对监控数据进行聚合，过滤，裁剪。<br>Prometheus内置了一个强大的数据查询语言PromQL。通过PromQL可以实现对监控数据的查询、聚合。同时PromQL也被应用于数据可视化(如Grafana)以及告警当中。<br>通过PromQL可以轻松回答类似于以下问题： </p><pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code><span class="pun">*</span><span class="pln"> </span><span class="pun">在过去一段时间中</span><span class="lit">95</span><span class="pun">%应用延迟时间的分布范围</span></code></li><li class="L1"><code><span class="pun">*</span><span class="pln"> </span><span class="pun">预测在</span><span class="lit">4</span><span class="pun">小时后，磁盘空间占用大致会是什么情况</span></code></li><li class="L2"><code><span class="pun">*</span><span class="pln"> CPU</span><span class="pun">占用率前</span><span class="lit">5</span><span class="pun">位的服务有哪些(过滤)</span></code></li></ol></pre><p>对于监控系统而言，大量的监控任务必然导致有大量的数据产生。而Prometheus可以高效地处理这些数据，对于单一Prometheus Server实例而言它可以处理：</p> <pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code><span class="pun">*</span><span class="pln"> </span><span class="pun">数以百万的监控指标</span></code></li><li class="L1"><code><span class="pun">*</span><span class="pln"> </span><span class="pun">每秒处理数十万的数据点'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  padding: 30px;
  margin-bottom: 20px;
}
</style>
