"use strict"

let hh = 0
let mm = 0
let ss = 0

let tempo = 10 //quantos milésimos vale um segundo.
let cron

function start() {
  cron = setInterval(() => { timer() }, tempo);
}

function pause() {
  clearInterval(cron)
}

function stopp() {
  clearInterval(cron)
  hh = 0
  mm = 0
  ss = 0
  document.getElementById('counter').innerHTML = '00:00:00'
}

//função principal
function timer() {
  ss++;

  if (ss == 60) {
    ss = 0;
    mm++;

    if (mm == 60) {
      mm = 0;
      hh++;
    }
  }



  let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm <10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
  document.getElementById('counter').innerHTML = format
}