// ハンバーガーメニュー クリックに応じてリンクの表示・非表示を切り替える
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});