// 更新年份筛选器：只显示从publication字段提取到的年份
(function() {
  'use strict';
  
  function extractYearFromPublication(element) {
    // 查找<em>标签中的publication信息（如 "AAAI 2026"）
    const emTags = element.querySelectorAll('em');
    for (let i = 0; i < emTags.length; i++) {
      const emText = emTags[i].textContent || emTags[i].innerText;
      const yearMatch = emText.match(/\b(19|20)\d{2}\b/);
      if (yearMatch) {
        return yearMatch[0];
      }
    }
    return null;
  }
  
  function updateYearFilter() {
    const items = document.querySelectorAll('.isotope-item');
    const yearSet = new Set();
    
    // 从所有显示的论文中提取年份
    items.forEach(function(item) {
      const year = extractYearFromPublication(item);
      if (year && year !== '0001') {
        // 更新year类
        item.className = item.className.replace(/\byear-\d{4}\b/g, '');
        item.classList.add('year-' + year);
        yearSet.add(year);
      } else if (year === '0001') {
        // 如果是0001，尝试重新提取
        const correctYear = extractYearFromPublication(item);
        if (correctYear && correctYear !== '0001') {
          item.className = item.className.replace(/\byear-\d{4}\b/g, '');
          item.classList.add('year-' + correctYear);
          yearSet.add(correctYear);
        }
      }
    });
    
    // 更新筛选器选项
    const yearFilter = document.querySelector('.pub-filters[data-filter-group="year"]');
    if (!yearFilter) return;
    
    const currentValue = yearFilter.value;
    const firstOption = yearFilter.querySelector('option[value="*"]');
    yearFilter.innerHTML = '';
    if (firstOption) {
      yearFilter.appendChild(firstOption);
    }
    
    // 添加年份选项（排除0001和2021，除非它们真的存在）
    const sortedYears = Array.from(yearSet)
      .map(y => parseInt(y))
      .filter(y => y >= 2000 && y <= 2100) // 只保留合理的年份
      .sort((a, b) => b - a)
      .map(y => y.toString());
    
    sortedYears.forEach(function(year) {
      const option = document.createElement('option');
      option.value = '.year-' + year;
      option.textContent = year;
      yearFilter.appendChild(option);
    });
    
    // 恢复选中的值
    if (currentValue && yearFilter.querySelector('option[value="' + currentValue + '"]')) {
      yearFilter.value = currentValue;
    }
  }
  
  function init() {
    let attempts = 0;
    const maxAttempts = 10;
    
    function tryUpdate() {
      const items = document.querySelectorAll('.isotope-item');
      const yearFilter = document.querySelector('.pub-filters[data-filter-group="year"]');
      
      if (items.length > 0 && yearFilter) {
        updateYearFilter();
        // 延迟再次更新，确保所有内容都已渲染
        setTimeout(updateYearFilter, 500);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryUpdate, 200);
      }
    }
    
    tryUpdate();
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
