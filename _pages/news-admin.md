---
layout: page
permalink: /news-admin/
title: News management
description: Draft and publish a news update through GitHub.
sitemap: false
---

<div class="news-admin-intro">
  <div class="eyebrow">GITHUB PUBLISHING</div>
  <p>填写动态内容后，页面会生成新闻文件并带你前往 GitHub 提交。只有拥有本仓库写入权限的 GitHub 账号才能发布。</p>
</div>

<div class="news-admin-guide">
  <strong>发布方式：</strong>填写下方内容 → 跳转 GitHub 并确认文件内容 → 点击 <em>Commit changes</em>。提交后，网站将自动更新。此页面不会保存或发送你的草稿内容。
</div>

<form id="news-manager-form" class="contact-form news-manager-form">
  <div class="form-row">
    <label for="news-date">发布日期</label>
    <input id="news-date" name="date" type="date" required>
  </div>

  <div class="form-row">
    <label for="news-title-en">英文标题</label>
    <input id="news-title-en" name="title-en" type="text" placeholder="e.g. ProtFormer-Site published in..." required>
  </div>

  <div class="form-row">
    <label for="news-title-zh">中文标题</label>
    <input id="news-title-zh" name="title-zh" type="text" placeholder="例如：ProtFormer-Site 论文发表于…" required>
  </div>

  <div class="form-row">
    <label for="news-body-en">英文正文</label>
    <textarea id="news-body-en" name="body-en" rows="6" placeholder="Briefly describe the update and include links if needed." required></textarea>
  </div>

  <div class="form-row">
    <label for="news-body-zh">中文正文</label>
    <textarea id="news-body-zh" name="body-zh" rows="6" placeholder="简要说明动态内容；可直接粘贴链接。" required></textarea>
  </div>

  <div class="news-admin-actions">
    <button class="button button-primary" type="submit">前往 GitHub 发布</button>
    <a class="button" href="https://github.com/wangleiofficial/wangleiofficial.github.io/tree/master/_news" target="_blank" rel="noopener">管理已有 News</a>
  </div>
  <p id="news-manager-status" class="news-manager-status" role="status" aria-live="polite"></p>
</form>

<noscript>
  <p class="contact-note">请启用 JavaScript 以使用发布表单，或直接在 <a href="https://github.com/wangleiofficial/wangleiofficial.github.io/tree/master/_news" target="_blank" rel="noopener">GitHub 的 _news 目录</a> 新增或编辑文件。</p>
</noscript>

<script>
  (() => {
    const form = document.getElementById('news-manager-form');
    const dateInput = document.getElementById('news-date');
    const status = document.getElementById('news-manager-status');
    const githubNewFileUrl = 'https://github.com/wangleiofficial/wangleiofficial.github.io/new/master';

    dateInput.value = new Date().toISOString().slice(0, 10);

    const value = (id) => document.getElementById(id).value.trim();
    const yamlString = (text) => JSON.stringify(text.replace(/\r?\n/g, ' ').trim());
    const slugify = (text) => {
      const slug = text.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48);
      return slug || 'update';
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const date = value('news-date');
      const titleEn = value('news-title-en');
      const titleZh = value('news-title-zh');
      const bodyEn = value('news-body-en');
      const bodyZh = value('news-body-zh');
      const filename = `news-${date}-${slugify(titleEn)}.md`;
      const content = [
        '---',
        'layout: post',
        `title: ${yamlString(titleEn)}`,
        `zh_title: ${yamlString(titleZh)}`,
        `date: ${date} 09:00:00+0800`,
        '---',
        '',
        bodyEn,
        '',
        '### 中文简介',
        '',
        bodyZh,
        ''
      ].join('\n');
      const url = `${githubNewFileUrl}?filename=${encodeURIComponent(`_news/${filename}`)}&value=${encodeURIComponent(content)}`;

      status.textContent = '正在前往 GitHub。请登录并确认文件后点击 Commit changes。';
      window.location.assign(url);
    });
  })();
</script>
