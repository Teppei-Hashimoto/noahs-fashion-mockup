const weeks = ['日', '月', '火', '水', '木', '金', '土'];
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

function createCalendar(year, month) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  const endDayCount = endDate.getDate();
  const lastMonthEndDate = new Date(year, month - 2, 0);
  const lastMonthendDayCount = lastMonthEndDate.getDate();
  const startDay = startDate.getDay();
  let dayCount = 1;
  let calendarHtml = '';

  calendarHtml +=
    '<div class="table-caption"><h2><button id="prev" class="month" type="button"><span class="icon-keyboard_arrow_left"></span></button>' +
    year +
    '/' +
    month +
    '<button id="next" type="button" class="month"><span class="icon-keyboard_arrow_right"></span></button></h2></div>';

  calendarHtml += '<table>';

  calendarHtml += '<thead><tr>';
  for (let i = 0; i < weeks.length; i++) {
    calendarHtml += '<th>' + weeks[i] + '</th>';
  }
  calendarHtml += '</thead><tbody>';

  for (let w = 0; w < 6; w++) {
    calendarHtml += '<tr>';

    for (let d = 0; d < 7; d++) {
      var date1 = new Date(Date.now());
      var date2 = new Date(year, month - 1, dayCount + 1, 0, 0, 0);
      if (w == 0 && d < startDay) {
        let num = lastMonthendDayCount - startDay + d + 1;
        calendarHtml += '<td class="is-disabled">' + num + '</td>';
      } else if (dayCount > endDayCount) {
        let num = dayCount - endDayCount;
        calendarHtml += '<td class="is-disabled">' + num + '</td>';
        dayCount++;
      } else if (date2 < date1) {
        calendarHtml += '<td class="is-disabled">' + dayCount + '</td>';
        dayCount++;
      } else {
        calendarHtml += `<td class="calendar_td" data-year="${year}" data-month=${month} data-day=${dayCount} style="cursor: pointer;">${dayCount}</td>`;
        dayCount++;
      }
    }
    calendarHtml += '</tr>';
  }
  calendarHtml += '</tbody></table>';

  return calendarHtml;
}

function showCalendar(year, month) {
  // for ( i = 0; i < config.show; i++) {
  const calendarHtml = createCalendar(year, month);
  const sec = document.createElement('section');
  sec.innerHTML = calendarHtml;
  document.querySelector('#calendar').appendChild(sec);

  month++;
  if (month > 12) {
    year++;
    month = 1;
  }
  // }
}
function moveCalendar(e) {
  document.querySelector('#calendar').innerHTML = '';

  if (e.target.id === 'prev') {
    month--;
    if (month < 1) {
      year--;
      month = 12;
    }
  }

  if (e.target.id === 'next') {
    month++;
    if (month > 12) {
      year++;
      month = 1;
    }
  }

  showCalendar(year, month);
}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('calendar_td')) {
    document.getElementById('year_1').innerHTML = e.target.dataset.year - 0;
    document.getElementById('year').value = e.target.dataset.year - 0;
    document.getElementById('month_1').innerHTML = e.target.dataset.month - 0;
    document.getElementById('month').value = e.target.dataset.month - 0;
    document.getElementById('day_1').innerHTML = e.target.dataset.day - 0;
    document.getElementById('day').value = e.target.dataset.day - 0;
  }
});

showCalendar(year, month);

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('month')) {
    moveCalendar(e);
  }
});
