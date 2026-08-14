---
layout: page
permalink: /zh/tools/
title: 工具
description: 开源科研软件、预训练模型与在线资源。
language: zh
english_url: /tools/
chinese_url: /zh/tools/
---

<div class="tools-intro">
  <div class="eyebrow">科研软件</div>
  <p>这里汇集了我在蛋白质与 RNA 生物信息学研究中开发或维护的部分开源工具、预训练模型和在线资源。</p>
</div>

<div class="tools-grid">
  <article class="tool-card">
    <div class="tool-meta">蛋白质语言模型</div>
    <h2>ProtFlash</h2>
    <p>采用线性复杂度注意力机制的轻量级蛋白质语言模型，用于高效蛋白质表征学习。</p>
    <div class="tool-links">
      <a href="https://github.com/ISYSLAB-HUST/ProtFlash" target="_blank" rel="noopener">代码</a>
      <a href="https://pypi.org/project/ProtFlash/" target="_blank" rel="noopener">PyPI</a>
      <a href="https://doi.org/10.5281/zenodo.7655858" target="_blank" rel="noopener">模型权重</a>
      <a href="https://doi.org/10.1016/j.xcrp.2023.101600" target="_blank" rel="noopener">论文</a>
    </div>
  </article>

  <article class="tool-card">
    <div class="tool-meta">神经肽预测</div>
    <h2>NeuroPred-PLM</h2>
    <p>基于蛋白质语言模型的可解释神经肽预测方法。</p>
    <div class="tool-links">
      <a href="https://github.com/ISYSLAB-HUST/NeuroPred-PLM" target="_blank" rel="noopener">代码</a>
      <a href="https://huggingface.co/isyslab/NeuroPred-PLM" target="_blank" rel="noopener">模型</a>
      <a href="https://doi.org/10.1093/bib/bbad077" target="_blank" rel="noopener">论文</a>
    </div>
  </article>

  <article class="tool-card">
    <div class="tool-meta">切割位点预测</div>
    <h2>DeepNeuropePred</h2>
    <p>结合蛋白质语言模型与卷积网络，稳健预测神经肽前体的切割位点。</p>
    <div class="tool-links">
      <a href="https://github.com/ISYSLAB-HUST/DeepNeuropePred" target="_blank" rel="noopener">代码</a>
      <a href="http://isyslab.info/NeuroPepV2/deepNeuropePred.jsp" target="_blank" rel="noopener">在线服务</a>
      <a href="https://doi.org/10.1016/j.csbj.2023.12.004" target="_blank" rel="noopener">论文</a>
    </div>
  </article>

  <article class="tool-card">
    <div class="tool-meta">RNA 结构预测</div>
    <h2>MetaFold-RNA</h2>
    <p>利用元学习引导深度网络实现准确 RNA 二级结构预测的方法。</p>
    <div class="tool-links">
      <a href="https://github.com/wangleiofficial/MetaFold-RNA" target="_blank" rel="noopener">代码</a>
      <a href="https://www.biorxiv.org/content/10.1101/2025.09.18.676970v1" target="_blank" rel="noopener">预印本</a>
    </div>
  </article>

  <article class="tool-card">
    <div class="tool-meta">蛋白质结构检索</div>
    <h2>SSAlign</h2>
    <p>融合序列与结构表征的高效、高灵敏度蛋白质结构检索方法。</p>
    <div class="tool-links">
      <a href="https://www.biorxiv.org/content/10.1101/2025.07.03.662911v1" target="_blank" rel="noopener">预印本</a>
    </div>
  </article>
</div>

<p class="tools-footer">更多代码与实用工具请访问 <a href="https://github.com/wangleiofficial" target="_blank" rel="noopener">GitHub</a>。</p>
