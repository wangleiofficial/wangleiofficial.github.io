---
layout: page
permalink: /notes-admin/
title: Notes publishing
description: Draft a research note and publish it through GitHub.
sitemap: false
---

<div class="news-admin-intro">
  <div class="eyebrow">GITHUB PUBLISHING</div>
  <p>创建研究笔记、教程或模型使用示例。填写后将生成笔记文件，并跳转 GitHub 进行提交。</p>
</div>

<form id="notes-manager-form" class="contact-form news-manager-form">
  <div class="form-row"><label for="note-date">发布日期</label><input id="note-date" type="date" required></div>
  <div class="form-row"><label for="note-type">笔记类型</label><select id="note-type"><option value="Research note">科研笔记</option><option value="Tutorial">教程</option><option value="Model guide">模型使用示例</option></select></div>
  <div class="form-row"><label for="note-title">标题</label><input id="note-title" type="text" placeholder="例如：Running ProtFlash for protein embeddings" required></div>
  <div class="form-row"><label for="note-description">简短介绍</label><input id="note-description" type="text" placeholder="一句话说明本文内容" required></div>
  <div class="form-row"><label for="note-body">正文（Markdown）</label><textarea id="note-body" rows="12" placeholder="使用 Markdown 撰写正文；可粘贴链接、代码和图片。" required></textarea></div>
  <div class="news-admin-actions">
    <button class="button button-primary" type="submit">前往 GitHub 发布</button>
    <a class="button" href="https://github.com/wangleiofficial/wangleiofficial.github.io/tree/master/_notes" target="_blank" rel="noopener">管理已有 Notes</a>
    <a class="button" href="/notes/">查看 Notes</a>
  </div>
  <p id="notes-manager-status" class="news-manager-status" role="status" aria-live="polite"></p>
</form>

<script>
  (() => {
    const form = document.getElementById('notes-manager-form');
    const dateInput = document.getElementById('note-date');
    const status = document.getElementById('notes-manager-status');
    const value = (id) => document.getElementById(id).value.trim();
    const yamlString = (text) => JSON.stringify(text.replace(/\r?\n/g, ' ').trim());
    const slugify = (text) => text.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48) || 'note';
    dateInput.value = new Date().toISOString().slice(0, 10);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const date = value('note-date');
      const title = value('note-title');
      const filename = `note-${date}-${slugify(title)}.md`;
      const content = ['---', 'layout: note', `title: ${yamlString(title)}`, `description: ${yamlString(value('note-description'))}`, `note_type: ${yamlString(value('note-type'))}`, `date: ${date} 09:00:00+0800`, '---', '', value('note-body'), ''].join('\n');
      const url = `https://github.com/wangleiofficial/wangleiofficial.github.io/new/master?filename=${encodeURIComponent(`_notes/${filename}`)}&value=${encodeURIComponent(content)}`;
      status.textContent = '正在前往 GitHub。请确认文件内容后点击 Commit changes。';
      window.location.assign(url);
    });
  })();
</script>
