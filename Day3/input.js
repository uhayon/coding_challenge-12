const input = `#1 @ 258,327: 19x22
#2 @ 553,11: 13x13
#3 @ 619,175: 17x20
#4 @ 965,962: 26x16
#5 @ 389,618: 23x28
#6 @ 232,720: 14x20
#7 @ 548,695: 10x20
#8 @ 149,242: 16x17
#9 @ 628,301: 22x25
#10 @ 229,298: 21x11
#11 @ 315,784: 25x19
#12 @ 557,444: 27x26
#13 @ 510,120: 20x22
#14 @ 616,929: 20x17
#15 @ 779,957: 23x16
#16 @ 576,682: 22x15
#17 @ 16,205: 20x23
#18 @ 954,514: 28x10
#19 @ 238,149: 20x14
#20 @ 353,669: 12x24
#21 @ 70,916: 24x10
#22 @ 264,505: 25x16
#23 @ 559,307: 26x22
#24 @ 52,959: 11x24
#25 @ 713,889: 17x25
#26 @ 746,433: 20x11
#27 @ 117,775: 27x11
#28 @ 925,830: 20x13
#29 @ 456,760: 19x23
#30 @ 88,39: 17x20
#31 @ 851,79: 16x24
#32 @ 330,230: 25x10
#33 @ 743,816: 16x12
#34 @ 518,637: 26x25
#35 @ 267,330: 25x28
#36 @ 745,665: 14x28
#37 @ 627,965: 19x13
#38 @ 278,558: 11x14
#39 @ 742,755: 11x14
#40 @ 638,758: 23x25
#41 @ 766,736: 17x21
#42 @ 675,276: 26x21
#43 @ 679,841: 26x15
#44 @ 748,43: 26x23
#45 @ 961,273: 15x14
#46 @ 361,955: 17x11
#47 @ 192,552: 17x26
#48 @ 874,580: 14x20
#49 @ 672,284: 29x12
#50 @ 470,772: 12x12
#51 @ 260,350: 27x10
#52 @ 855,96: 18x24
#53 @ 725,302: 19x26
#54 @ 646,826: 15x18
#55 @ 902,116: 17x10
#56 @ 251,767: 17x24
#57 @ 781,274: 17x12
#58 @ 284,168: 13x13
#59 @ 808,592: 11x10
#60 @ 497,656: 13x11
#61 @ 230,279: 17x28
#62 @ 557,324: 21x13
#63 @ 447,213: 23x19
#64 @ 333,55: 29x19
#65 @ 618,151: 23x12
#66 @ 514,584: 29x21
#67 @ 496,832: 19x29
#68 @ 791,909: 26x23
#69 @ 889,104: 28x10
#70 @ 156,263: 9x10
#71 @ 590,904: 20x15
#72 @ 45,307: 20x21
#73 @ 714,305: 10x11
#74 @ 893,437: 22x17
#75 @ 134,482: 29x16
#76 @ 360,352: 28x26
#77 @ 530,302: 26x23
#78 @ 171,895: 18x18
#79 @ 876,371: 21x29
#80 @ 84,835: 14x20
#81 @ 978,486: 21x21
#82 @ 900,664: 24x16
#83 @ 807,267: 10x21
#84 @ 104,792: 19x29
#85 @ 55,608: 18x13
#86 @ 25,623: 14x26
#87 @ 711,878: 16x25
#88 @ 357,315: 11x14
#89 @ 90,170: 28x15
#90 @ 377,81: 13x19
#91 @ 154,261: 14x15
#92 @ 551,287: 20x20
#93 @ 871,690: 24x15
#94 @ 193,681: 24x14
#95 @ 549,568: 27x18
#96 @ 400,832: 19x27
#97 @ 411,476: 25x11
#98 @ 909,90: 15x21
#99 @ 418,358: 18x28
#100 @ 466,213: 21x18
#101 @ 293,183: 19x21
#102 @ 430,402: 27x10
#103 @ 424,60: 17x24
#104 @ 657,906: 14x23
#105 @ 326,650: 17x27
#106 @ 886,105: 22x19
#107 @ 454,399: 15x24
#108 @ 185,415: 21x19
#109 @ 645,789: 17x25
#110 @ 649,889: 18x14
#111 @ 824,149: 11x27
#112 @ 948,282: 27x18
#113 @ 632,645: 27x19
#114 @ 530,545: 10x29
#115 @ 43,961: 13x12
#116 @ 709,758: 24x17
#117 @ 480,942: 10x29
#118 @ 289,208: 29x13
#119 @ 277,928: 18x25
#120 @ 503,832: 15x28
#121 @ 126,109: 27x19
#122 @ 369,106: 22x17
#123 @ 620,137: 18x15
#124 @ 268,978: 12x14
#125 @ 180,553: 27x26
#126 @ 71,419: 29x17
#127 @ 21,958: 28x10
#128 @ 661,826: 18x19
#129 @ 922,56: 11x28
#130 @ 735,89: 14x15
#131 @ 486,271: 17x11
#132 @ 760,69: 11x20
#133 @ 328,665: 13x18
#134 @ 53,71: 25x13
#135 @ 60,178: 8x3
#136 @ 64,913: 28x14
#137 @ 757,367: 11x25
#138 @ 60,247: 18x14
#139 @ 418,224: 12x20
#140 @ 899,48: 26x29
#141 @ 393,633: 28x25
#142 @ 868,142: 12x24
#143 @ 83,900: 24x16
#144 @ 312,942: 13x13
#145 @ 136,104: 10x29
#146 @ 674,780: 21x24
#147 @ 133,932: 10x27
#148 @ 267,827: 24x17
#149 @ 545,344: 13x10
#150 @ 760,897: 11x23
#151 @ 242,660: 10x20
#152 @ 802,758: 25x25
#153 @ 919,55: 13x21
#154 @ 850,317: 29x15
#155 @ 55,176: 20x10
#156 @ 278,852: 29x11
#157 @ 931,318: 29x26
#158 @ 74,351: 21x25
#159 @ 712,305: 25x24
#160 @ 605,363: 24x13
#161 @ 719,887: 20x10
#162 @ 730,172: 8x7
#163 @ 468,572: 13x10
#164 @ 541,74: 29x13
#165 @ 402,206: 27x18
#166 @ 310,147: 17x25
#167 @ 243,145: 21x14
#168 @ 441,640: 23x11
#169 @ 680,331: 16x11
#170 @ 22,446: 9x6
#171 @ 685,327: 19x21
#172 @ 52,872: 29x27
#173 @ 723,39: 13x15
#174 @ 522,799: 16x19
#175 @ 335,529: 18x10
#176 @ 663,304: 15x22
#177 @ 921,704: 24x15
#178 @ 874,492: 23x21
#179 @ 810,939: 18x21
#180 @ 119,80: 12x29
#181 @ 780,446: 27x22
#182 @ 295,32: 17x26
#183 @ 341,833: 23x11
#184 @ 115,773: 27x15
#185 @ 752,644: 17x29
#186 @ 767,636: 15x19
#187 @ 296,211: 10x11
#188 @ 474,347: 27x25
#189 @ 593,333: 17x18
#190 @ 859,571: 18x15
#191 @ 434,404: 17x10
#192 @ 803,621: 26x27
#193 @ 737,39: 19x18
#194 @ 245,301: 23x23
#195 @ 457,478: 27x18
#196 @ 450,939: 24x25
#197 @ 918,64: 12x10
#198 @ 679,921: 12x12
#199 @ 549,615: 29x23
#200 @ 874,415: 22x18
#201 @ 232,280: 24x29
#202 @ 729,379: 17x20
#203 @ 813,740: 11x20
#204 @ 659,216: 17x29
#205 @ 303,899: 10x27
#206 @ 934,694: 24x20
#207 @ 185,621: 16x18
#208 @ 856,708: 23x25
#209 @ 799,914: 29x20
#210 @ 890,702: 25x13
#211 @ 517,104: 16x29
#212 @ 981,593: 12x18
#213 @ 807,56: 29x24
#214 @ 57,464: 24x21
#215 @ 356,831: 17x17
#216 @ 55,420: 17x28
#217 @ 29,583: 17x15
#218 @ 740,868: 10x10
#219 @ 793,643: 29x23
#220 @ 255,573: 25x24
#221 @ 738,897: 25x29
#222 @ 859,823: 10x17
#223 @ 427,211: 15x21
#224 @ 882,476: 13x26
#225 @ 374,969: 28x19
#226 @ 138,478: 10x21
#227 @ 58,623: 19x19
#228 @ 436,238: 16x25
#229 @ 590,907: 23x29
#230 @ 950,508: 11x13
#231 @ 969,646: 20x19
#232 @ 470,473: 28x20
#233 @ 976,604: 15x24
#234 @ 808,53: 26x24
#235 @ 71,260: 24x14
#236 @ 841,81: 29x11
#237 @ 944,963: 21x24
#238 @ 632,235: 12x14
#239 @ 768,494: 14x25
#240 @ 788,437: 8x3
#241 @ 474,164: 25x29
#242 @ 93,903: 18x20
#243 @ 235,752: 26x13
#244 @ 478,414: 13x18
#245 @ 294,930: 14x17
#246 @ 932,897: 21x13
#247 @ 300,916: 29x19
#248 @ 762,98: 11x21
#249 @ 746,629: 29x21
#250 @ 279,179: 26x11
#251 @ 426,338: 21x17
#252 @ 859,811: 12x24
#253 @ 722,751: 29x15
#254 @ 55,253: 28x19
#255 @ 739,434: 11x22
#256 @ 61,309: 14x27
#257 @ 669,273: 14x10
#258 @ 413,506: 12x12
#259 @ 47,812: 19x21
#260 @ 846,580: 18x22
#261 @ 281,841: 19x20
#262 @ 761,360: 25x29
#263 @ 245,972: 14x18
#264 @ 637,266: 16x24
#265 @ 167,304: 14x24
#266 @ 438,331: 11x12
#267 @ 525,912: 12x21
#268 @ 249,139: 25x17
#269 @ 956,389: 15x26
#270 @ 153,977: 17x15
#271 @ 226,692: 19x22
#272 @ 717,894: 26x22
#273 @ 100,838: 13x10
#274 @ 81,113: 24x25
#275 @ 231,150: 25x20
#276 @ 882,200: 29x26
#277 @ 890,380: 16x25
#278 @ 655,893: 18x29
#279 @ 125,481: 26x19
#280 @ 975,198: 18x18
#281 @ 332,332: 28x28
#282 @ 902,352: 12x18
#283 @ 123,904: 18x19
#284 @ 38,447: 29x27
#285 @ 142,34: 19x27
#286 @ 513,810: 12x23
#287 @ 270,494: 28x13
#288 @ 940,409: 10x19
#289 @ 656,8: 19x25
#290 @ 436,263: 14x29
#291 @ 344,694: 19x11
#292 @ 541,838: 22x26
#293 @ 910,958: 13x16
#294 @ 870,224: 23x20
#295 @ 483,431: 22x23
#296 @ 170,402: 6x10
#297 @ 549,116: 15x22
#298 @ 901,689: 16x11
#299 @ 84,344: 19x16
#300 @ 60,293: 16x15
#301 @ 724,473: 20x23
#302 @ 693,46: 22x27
#303 @ 616,62: 20x17
#304 @ 857,973: 12x11
#305 @ 688,201: 28x20
#306 @ 14,790: 21x16
#307 @ 304,441: 26x14
#308 @ 272,623: 24x15
#309 @ 746,139: 24x10
#310 @ 218,844: 14x15
#311 @ 837,881: 10x27
#312 @ 643,14: 15x21
#313 @ 366,487: 20x23
#314 @ 487,720: 14x29
#315 @ 526,534: 24x20
#316 @ 348,883: 28x11
#317 @ 646,93: 27x27
#318 @ 739,805: 11x23
#319 @ 946,619: 15x10
#320 @ 778,77: 20x11
#321 @ 150,845: 11x26
#322 @ 952,671: 10x17
#323 @ 910,418: 15x14
#324 @ 404,644: 13x10
#325 @ 21,506: 12x13
#326 @ 93,493: 17x12
#327 @ 19,618: 15x18
#328 @ 505,736: 22x27
#329 @ 526,953: 21x20
#330 @ 485,794: 13x20
#331 @ 515,977: 9x5
#332 @ 889,373: 15x17
#333 @ 532,536: 9x14
#334 @ 431,353: 10x22
#335 @ 846,794: 14x11
#336 @ 946,677: 13x14
#337 @ 670,110: 10x15
#338 @ 889,322: 14x20
#339 @ 311,23: 3x13
#340 @ 51,663: 28x20
#341 @ 925,828: 29x17
#342 @ 177,376: 27x15
#343 @ 384,620: 27x12
#344 @ 338,394: 29x16
#345 @ 744,933: 13x9
#346 @ 665,21: 25x10
#347 @ 533,588: 20x12
#348 @ 115,425: 22x22
#349 @ 823,400: 11x11
#350 @ 38,351: 19x25
#351 @ 548,278: 15x24
#352 @ 27,234: 29x11
#353 @ 125,93: 18x17
#354 @ 262,867: 26x25
#355 @ 223,867: 19x17
#356 @ 10,556: 18x27
#357 @ 631,849: 22x26
#358 @ 529,878: 22x24
#359 @ 276,292: 22x27
#360 @ 882,678: 15x17
#361 @ 828,743: 21x10
#362 @ 729,522: 17x24
#363 @ 836,75: 25x12
#364 @ 221,875: 15x11
#365 @ 507,247: 24x21
#366 @ 331,733: 15x29
#367 @ 766,746: 25x26
#368 @ 426,205: 15x25
#369 @ 357,181: 23x17
#370 @ 461,549: 15x23
#371 @ 673,322: 12x12
#372 @ 295,586: 17x14
#373 @ 58,819: 15x9
#374 @ 484,957: 20x21
#375 @ 676,497: 25x15
#376 @ 929,32: 18x23
#377 @ 157,783: 27x28
#378 @ 462,465: 11x29
#379 @ 701,24: 22x28
#380 @ 196,258: 29x18
#381 @ 159,234: 26x17
#382 @ 487,279: 26x16
#383 @ 483,804: 28x27
#384 @ 348,683: 17x21
#385 @ 806,815: 20x20
#386 @ 625,234: 18x26
#387 @ 744,562: 19x20
#388 @ 362,708: 11x21
#389 @ 444,587: 24x20
#390 @ 435,411: 29x21
#391 @ 969,188: 22x23
#392 @ 332,786: 24x19
#393 @ 659,969: 24x13
#394 @ 424,393: 19x18
#395 @ 972,484: 19x12
#396 @ 963,242: 20x28
#397 @ 664,630: 12x10
#398 @ 567,72: 23x12
#399 @ 935,200: 25x15
#400 @ 750,568: 11x13
#401 @ 775,113: 13x11
#402 @ 687,441: 11x23
#403 @ 623,335: 10x25
#404 @ 542,946: 13x18
#405 @ 503,59: 16x16
#406 @ 578,846: 26x18
#407 @ 380,261: 17x16
#408 @ 462,208: 20x26
#409 @ 548,329: 13x23
#410 @ 858,722: 25x29
#411 @ 368,722: 24x11
#412 @ 970,671: 13x29
#413 @ 326,701: 18x11
#414 @ 74,22: 25x14
#415 @ 456,85: 12x24
#416 @ 696,79: 18x29
#417 @ 942,745: 29x15
#418 @ 906,491: 29x12
#419 @ 700,813: 11x29
#420 @ 250,296: 13x10
#421 @ 465,52: 28x28
#422 @ 147,538: 21x12
#423 @ 360,300: 11x27
#424 @ 942,248: 22x10
#425 @ 819,708: 10x22
#426 @ 745,563: 17x16
#427 @ 393,608: 11x12
#428 @ 116,526: 17x14
#429 @ 470,155: 13x10
#430 @ 357,534: 13x29
#431 @ 330,962: 20x20
#432 @ 462,4: 22x26
#433 @ 853,807: 27x17
#434 @ 671,971: 28x21
#435 @ 537,4: 20x26
#436 @ 656,324: 13x13
#437 @ 90,822: 25x29
#438 @ 764,355: 15x10
#439 @ 61,978: 27x20
#440 @ 520,194: 19x22
#441 @ 553,293: 19x18
#442 @ 654,264: 25x22
#443 @ 368,182: 29x11
#444 @ 433,613: 21x17
#445 @ 727,68: 11x10
#446 @ 250,457: 14x13
#447 @ 289,122: 15x20
#448 @ 262,922: 24x14
#449 @ 824,657: 19x21
#450 @ 786,265: 19x22
#451 @ 900,457: 23x12
#452 @ 148,975: 10x13
#453 @ 44,59: 18x28
#454 @ 82,753: 24x25
#455 @ 298,860: 28x20
#456 @ 145,106: 28x16
#457 @ 160,511: 17x25
#458 @ 579,673: 10x18
#459 @ 412,728: 27x17
#460 @ 440,340: 24x21
#461 @ 548,214: 10x15
#462 @ 27,754: 24x18
#463 @ 135,86: 18x20
#464 @ 840,729: 26x27
#465 @ 9,613: 11x15
#466 @ 862,380: 24x29
#467 @ 142,927: 27x11
#468 @ 570,414: 16x26
#469 @ 946,509: 17x28
#470 @ 81,426: 13x27
#471 @ 786,434: 18x11
#472 @ 899,350: 27x12
#473 @ 105,502: 20x27
#474 @ 238,758: 26x14
#475 @ 420,601: 26x26
#476 @ 646,810: 22x29
#477 @ 343,259: 14x13
#478 @ 676,974: 24x18
#479 @ 951,259: 25x26
#480 @ 219,781: 21x27
#481 @ 601,64: 19x25
#482 @ 647,903: 18x23
#483 @ 832,908: 24x14
#484 @ 177,320: 21x16
#485 @ 312,929: 12x24
#486 @ 83,437: 5x7
#487 @ 540,333: 22x27
#488 @ 936,895: 14x11
#489 @ 936,698: 29x13
#490 @ 217,809: 21x13
#491 @ 188,895: 27x24
#492 @ 635,204: 12x24
#493 @ 484,820: 21x23
#494 @ 133,583: 25x18
#495 @ 129,426: 19x26
#496 @ 316,937: 18x18
#497 @ 303,440: 29x11
#498 @ 967,662: 18x29
#499 @ 970,51: 21x15
#500 @ 90,833: 9x15
#501 @ 440,430: 19x20
#502 @ 657,117: 10x18
#503 @ 606,372: 10x5
#504 @ 57,870: 11x27
#505 @ 940,663: 29x12
#506 @ 360,582: 22x19
#507 @ 810,88: 11x20
#508 @ 626,668: 25x24
#509 @ 392,266: 12x16
#510 @ 919,290: 19x23
#511 @ 922,221: 18x19
#512 @ 804,532: 25x25
#513 @ 558,467: 28x16
#514 @ 438,970: 10x13
#515 @ 162,322: 12x19
#516 @ 101,267: 27x27
#517 @ 752,347: 29x13
#518 @ 693,751: 22x15
#519 @ 753,101: 13x13
#520 @ 559,948: 23x28
#521 @ 36,581: 22x11
#522 @ 457,637: 29x22
#523 @ 421,419: 28x23
#524 @ 289,810: 10x21
#525 @ 31,600: 27x18
#526 @ 48,298: 21x23
#527 @ 428,194: 23x22
#528 @ 745,77: 21x16
#529 @ 764,493: 18x12
#530 @ 523,124: 19x21
#531 @ 762,936: 12x18
#532 @ 925,74: 14x11
#533 @ 684,936: 17x19
#534 @ 230,175: 11x15
#535 @ 331,442: 12x22
#536 @ 929,945: 22x21
#537 @ 274,966: 13x29
#538 @ 96,418: 28x19
#539 @ 445,961: 26x14
#540 @ 451,198: 24x22
#541 @ 607,359: 12x21
#542 @ 467,484: 26x10
#543 @ 229,392: 15x16
#544 @ 472,371: 13x27
#545 @ 733,813: 13x19
#546 @ 58,594: 23x24
#547 @ 954,588: 17x25
#548 @ 283,301: 18x20
#549 @ 29,203: 27x23
#550 @ 440,68: 17x15
#551 @ 14,738: 29x18
#552 @ 379,694: 12x16
#553 @ 666,126: 19x15
#554 @ 858,560: 22x19
#555 @ 939,87: 14x25
#556 @ 429,707: 24x29
#557 @ 675,908: 15x11
#558 @ 790,821: 19x26
#559 @ 370,469: 29x24
#560 @ 109,122: 27x29
#561 @ 526,358: 19x19
#562 @ 297,282: 12x27
#563 @ 530,927: 25x10
#564 @ 3,189: 26x15
#565 @ 657,755: 29x25
#566 @ 580,419: 23x14
#567 @ 392,633: 25x13
#568 @ 408,481: 23x20
#569 @ 243,965: 25x25
#570 @ 477,69: 29x29
#571 @ 814,923: 27x19
#572 @ 896,68: 16x18
#573 @ 968,582: 10x16
#574 @ 787,767: 25x16
#575 @ 569,668: 25x18
#576 @ 134,847: 24x14
#577 @ 210,447: 11x22
#578 @ 427,266: 20x13
#579 @ 210,305: 27x19
#580 @ 811,694: 28x17
#581 @ 6,32: 27x20
#582 @ 44,241: 15x29
#583 @ 32,749: 25x20
#584 @ 468,277: 25x26
#585 @ 569,952: 26x10
#586 @ 954,736: 14x11
#587 @ 797,233: 19x13
#588 @ 300,577: 19x12
#589 @ 228,110: 21x17
#590 @ 480,763: 15x10
#591 @ 345,838: 14x10
#592 @ 329,253: 27x13
#593 @ 271,287: 13x18
#594 @ 874,131: 28x13
#595 @ 520,243: 21x27
#596 @ 940,226: 11x29
#597 @ 1,931: 11x14
#598 @ 874,562: 13x29
#599 @ 325,175: 28x16
#600 @ 728,891: 15x13
#601 @ 785,625: 25x28
#602 @ 125,920: 20x28
#603 @ 276,116: 16x28
#604 @ 655,965: 29x23
#605 @ 233,230: 23x16
#606 @ 874,850: 15x17
#607 @ 621,454: 12x18
#608 @ 738,10: 27x23
#609 @ 908,493: 21x7
#610 @ 271,410: 26x11
#611 @ 734,135: 19x13
#612 @ 591,883: 15x10
#613 @ 151,722: 22x11
#614 @ 485,829: 28x25
#615 @ 662,482: 24x16
#616 @ 392,613: 19x11
#617 @ 45,137: 20x24
#618 @ 949,145: 18x25
#619 @ 674,134: 11x11
#620 @ 157,120: 10x18
#621 @ 491,935: 16x11
#622 @ 39,881: 22x25
#623 @ 632,183: 12x22
#624 @ 398,293: 13x18
#625 @ 434,69: 27x14
#626 @ 70,633: 15x16
#627 @ 667,639: 18x23
#628 @ 552,695: 15x24
#629 @ 385,153: 19x26
#630 @ 750,85: 19x12
#631 @ 968,877: 18x16
#632 @ 759,948: 15x17
#633 @ 901,324: 23x13
#634 @ 753,709: 23x26
#635 @ 788,663: 10x11
#636 @ 270,158: 21x11
#637 @ 908,72: 19x11
#638 @ 204,216: 13x24
#639 @ 241,461: 21x28
#640 @ 791,76: 17x24
#641 @ 199,727: 10x20
#642 @ 553,139: 25x24
#643 @ 53,666: 15x19
#644 @ 55,326: 26x11
#645 @ 286,583: 19x16
#646 @ 897,320: 22x13
#647 @ 116,494: 26x14
#648 @ 342,32: 27x17
#649 @ 545,307: 18x21
#650 @ 933,188: 12x23
#651 @ 592,473: 14x11
#652 @ 948,426: 13x23
#653 @ 468,296: 25x14
#654 @ 716,276: 14x29
#655 @ 326,645: 18x22
#656 @ 263,621: 13x17
#657 @ 970,57: 19x11
#658 @ 751,564: 17x23
#659 @ 411,204: 20x19
#660 @ 831,366: 27x27
#661 @ 70,367: 21x12
#662 @ 636,824: 28x20
#663 @ 848,568: 18x18
#664 @ 508,846: 17x23
#665 @ 762,142: 20x26
#666 @ 846,104: 17x25
#667 @ 37,3: 13x15
#668 @ 505,826: 23x14
#669 @ 617,653: 13x18
#670 @ 829,657: 26x14
#671 @ 666,65: 16x29
#672 @ 580,841: 25x27
#673 @ 221,441: 12x24
#674 @ 231,390: 28x20
#675 @ 497,846: 17x18
#676 @ 449,581: 19x12
#677 @ 525,632: 22x27
#678 @ 875,485: 12x15
#679 @ 840,789: 23x15
#680 @ 651,302: 10x24
#681 @ 410,801: 26x29
#682 @ 918,67: 28x28
#683 @ 738,587: 17x16
#684 @ 237,523: 26x27
#685 @ 360,835: 24x18
#686 @ 36,238: 14x10
#687 @ 135,101: 26x29
#688 @ 711,296: 14x18
#689 @ 222,699: 24x25
#690 @ 905,331: 18x29
#691 @ 801,78: 17x21
#692 @ 943,680: 24x12
#693 @ 103,456: 13x25
#694 @ 678,587: 14x17
#695 @ 559,705: 27x28
#696 @ 294,817: 20x11
#697 @ 532,783: 21x24
#698 @ 209,827: 13x18
#699 @ 64,40: 29x14
#700 @ 443,959: 10x13
#701 @ 589,886: 22x14
#702 @ 635,815: 25x25
#703 @ 673,911: 13x23
#704 @ 491,959: 14x24
#705 @ 459,317: 23x10
#706 @ 491,822: 22x27
#707 @ 534,670: 21x22
#708 @ 401,367: 12x27
#709 @ 342,37: 14x24
#710 @ 692,724: 28x13
#711 @ 365,291: 13x23
#712 @ 111,674: 21x13
#713 @ 373,573: 25x12
#714 @ 545,965: 12x16
#715 @ 454,6: 29x16
#716 @ 263,426: 17x12
#717 @ 631,862: 23x19
#718 @ 927,673: 14x28
#719 @ 770,688: 23x25
#720 @ 70,269: 14x25
#721 @ 271,512: 14x25
#722 @ 433,749: 25x29
#723 @ 918,404: 13x27
#724 @ 529,762: 23x26
#725 @ 684,593: 18x25
#726 @ 314,627: 11x21
#727 @ 853,81: 10x16
#728 @ 261,513: 29x19
#729 @ 892,705: 16x6
#730 @ 654,796: 27x15
#731 @ 935,598: 23x18
#732 @ 365,515: 17x29
#733 @ 761,574: 27x20
#734 @ 868,969: 28x20
#735 @ 594,341: 17x22
#736 @ 803,754: 17x10
#737 @ 967,484: 27x16
#738 @ 84,631: 13x12
#739 @ 195,141: 28x13
#740 @ 227,736: 24x17
#741 @ 235,494: 12x10
#742 @ 563,852: 12x18
#743 @ 700,314: 4x21
#744 @ 129,207: 25x22
#745 @ 301,905: 24x27
#746 @ 572,116: 14x10
#747 @ 575,935: 22x26
#748 @ 443,21: 23x27
#749 @ 105,271: 15x19
#750 @ 827,885: 23x11
#751 @ 439,585: 16x20
#752 @ 822,399: 12x28
#753 @ 638,817: 28x18
#754 @ 725,170: 17x12
#755 @ 775,445: 11x16
#756 @ 1,11: 13x26
#757 @ 967,399: 15x11
#758 @ 374,194: 25x13
#759 @ 521,733: 20x25
#760 @ 356,810: 12x24
#761 @ 570,935: 16x22
#762 @ 730,830: 17x12
#763 @ 310,885: 21x23
#764 @ 811,690: 27x20
#765 @ 930,403: 26x23
#766 @ 400,495: 16x19
#767 @ 911,677: 21x12
#768 @ 703,16: 25x15
#769 @ 70,245: 16x20
#770 @ 118,518: 13x13
#771 @ 686,455: 12x18
#772 @ 600,648: 21x20
#773 @ 77,404: 26x19
#774 @ 16,179: 14x19
#775 @ 308,950: 25x14
#776 @ 610,322: 15x20
#777 @ 939,204: 17x29
#778 @ 271,882: 14x29
#779 @ 539,700: 14x10
#780 @ 858,601: 10x20
#781 @ 395,816: 18x27
#782 @ 350,234: 11x17
#783 @ 945,520: 11x25
#784 @ 18,516: 13x21
#785 @ 305,194: 14x11
#786 @ 72,324: 19x10
#787 @ 367,309: 18x26
#788 @ 35,145: 20x13
#789 @ 711,821: 28x26
#790 @ 823,40: 24x24
#791 @ 215,121: 19x10
#792 @ 513,885: 28x15
#793 @ 765,87: 14x21
#794 @ 95,179: 23x12
#795 @ 496,813: 19x16
#796 @ 860,850: 26x18
#797 @ 204,706: 16x28
#798 @ 429,621: 14x21
#799 @ 310,320: 24x22
#800 @ 630,110: 21x19
#801 @ 714,50: 21x26
#802 @ 462,553: 13x27
#803 @ 452,10: 13x18
#804 @ 869,575: 15x11
#805 @ 519,544: 22x11
#806 @ 758,906: 16x10
#807 @ 147,49: 17x11
#808 @ 19,546: 13x26
#809 @ 141,433: 15x14
#810 @ 688,390: 13x24
#811 @ 929,611: 21x20
#812 @ 724,15: 13x16
#813 @ 275,501: 27x17
#814 @ 417,260: 24x10
#815 @ 833,888: 24x17
#816 @ 481,309: 25x26
#817 @ 6,942: 29x24
#818 @ 636,811: 24x21
#819 @ 199,939: 5x19
#820 @ 69,358: 18x21
#821 @ 221,805: 14x17
#822 @ 255,568: 24x26
#823 @ 486,554: 19x25
#824 @ 490,860: 29x14
#825 @ 679,976: 23x13
#826 @ 297,20: 29x24
#827 @ 496,797: 18x27
#828 @ 152,118: 20x26
#829 @ 646,277: 23x27
#830 @ 565,291: 18x26
#831 @ 434,932: 11x27
#832 @ 117,22: 20x14
#833 @ 639,800: 18x22
#834 @ 760,683: 16x28
#835 @ 250,941: 18x16
#836 @ 176,714: 12x21
#837 @ 958,314: 17x16
#838 @ 913,30: 21x21
#839 @ 878,493: 26x10
#840 @ 545,745: 22x20
#841 @ 302,630: 26x18
#842 @ 364,177: 18x26
#843 @ 279,682: 11x21
#844 @ 348,370: 18x27
#845 @ 551,961: 14x14
#846 @ 691,919: 12x17
#847 @ 966,955: 26x14
#848 @ 728,392: 23x14
#849 @ 298,930: 19x11
#850 @ 242,944: 15x20
#851 @ 535,668: 17x23
#852 @ 554,105: 19x17
#853 @ 529,559: 13x10
#854 @ 314,742: 28x17
#855 @ 635,321: 29x24
#856 @ 537,842: 27x29
#857 @ 315,282: 11x13
#858 @ 15,3: 24x25
#859 @ 955,424: 17x14
#860 @ 630,470: 17x27
#861 @ 507,934: 25x11
#862 @ 422,359: 20x12
#863 @ 781,484: 15x19
#864 @ 769,77: 10x29
#865 @ 388,277: 14x22
#866 @ 682,764: 18x13
#867 @ 170,869: 14x16
#868 @ 796,842: 26x25
#869 @ 498,232: 16x24
#870 @ 640,772: 18x27
#871 @ 141,89: 10x10
#872 @ 294,158: 21x14
#873 @ 698,312: 10x27
#874 @ 892,408: 21x29
#875 @ 843,805: 12x29
#876 @ 52,496: 21x11
#877 @ 689,776: 17x11
#878 @ 256,762: 10x29
#879 @ 744,584: 17x19
#880 @ 510,369: 17x10
#881 @ 943,242: 29x11
#882 @ 688,217: 21x24
#883 @ 528,648: 12x29
#884 @ 217,258: 10x28
#885 @ 811,447: 15x19
#886 @ 844,797: 12x18
#887 @ 913,207: 15x17
#888 @ 824,534: 21x16
#889 @ 77,768: 16x24
#890 @ 139,473: 22x13
#891 @ 355,51: 24x28
#892 @ 201,544: 13x20
#893 @ 449,15: 12x20
#894 @ 831,218: 20x25
#895 @ 798,126: 25x19
#896 @ 772,475: 11x25
#897 @ 641,785: 26x16
#898 @ 276,393: 13x18
#899 @ 487,319: 19x28
#900 @ 675,952: 29x21
#901 @ 468,753: 28x18
#902 @ 535,376: 16x9
#903 @ 39,898: 17x23
#904 @ 99,629: 22x16
#905 @ 806,446: 21x12
#906 @ 597,333: 10x14
#907 @ 916,680: 10x19
#908 @ 297,502: 13x19
#909 @ 414,728: 25x26
#910 @ 607,642: 22x25
#911 @ 724,9: 23x22
#912 @ 637,266: 26x21
#913 @ 880,429: 27x11
#914 @ 707,289: 18x29
#915 @ 402,625: 12x23
#916 @ 297,40: 10x13
#917 @ 470,220: 16x10
#918 @ 89,628: 17x21
#919 @ 785,748: 21x21
#920 @ 981,482: 12x26
#921 @ 789,645: 23x18
#922 @ 898,691: 29x18
#923 @ 630,922: 20x13
#924 @ 19,444: 25x13
#925 @ 377,695: 23x13
#926 @ 119,12: 13x19
#927 @ 941,593: 12x25
#928 @ 280,511: 11x29
#929 @ 454,116: 14x29
#930 @ 681,915: 19x10
#931 @ 202,565: 28x27
#932 @ 306,934: 21x28
#933 @ 837,120: 17x17
#934 @ 761,514: 12x27
#935 @ 656,112: 28x21
#936 @ 470,486: 29x25
#937 @ 572,635: 11x15
#938 @ 139,108: 12x16
#939 @ 352,517: 25x20
#940 @ 696,339: 28x23
#941 @ 914,85: 18x23
#942 @ 161,522: 16x29
#943 @ 869,823: 20x18
#944 @ 451,333: 21x20
#945 @ 921,699: 27x14
#946 @ 637,312: 17x14
#947 @ 632,177: 12x16
#948 @ 34,606: 19x23
#949 @ 316,345: 28x15
#950 @ 101,841: 13x21
#951 @ 506,655: 28x12
#952 @ 375,282: 20x18
#953 @ 397,612: 28x24
#954 @ 680,894: 22x21
#955 @ 18,701: 24x17
#956 @ 120,10: 10x13
#957 @ 30,805: 17x24
#958 @ 309,659: 27x24
#959 @ 153,716: 13x11
#960 @ 54,180: 23x12
#961 @ 530,955: 17x10
#962 @ 959,734: 17x12
#963 @ 168,400: 25x16
#964 @ 186,558: 16x25
#965 @ 454,85: 11x10
#966 @ 597,643: 23x11
#967 @ 439,427: 13x22
#968 @ 813,243: 22x13
#969 @ 135,900: 21x22
#970 @ 846,745: 13x19
#971 @ 871,385: 24x25
#972 @ 521,642: 8x15
#973 @ 604,353: 24x28
#974 @ 234,756: 25x29
#975 @ 435,952: 10x19
#976 @ 459,207: 10x19
#977 @ 977,487: 22x15
#978 @ 463,571: 24x10
#979 @ 216,228: 12x12
#980 @ 198,115: 19x15
#981 @ 155,469: 25x20
#982 @ 419,605: 11x16
#983 @ 197,936: 14x28
#984 @ 518,561: 13x21
#985 @ 556,951: 28x25
#986 @ 316,446: 24x25
#987 @ 271,194: 23x25
#988 @ 844,694: 20x29
#989 @ 977,651: 20x17
#990 @ 232,777: 28x15
#991 @ 722,42: 11x27
#992 @ 903,340: 10x29
#993 @ 857,557: 10x23
#994 @ 858,575: 14x21
#995 @ 97,496: 8x5
#996 @ 508,98: 17x26
#997 @ 71,401: 28x27
#998 @ 941,717: 21x20
#999 @ 486,748: 29x28
#1000 @ 367,319: 22x13
#1001 @ 63,671: 9x8
#1002 @ 636,786: 29x17
#1003 @ 602,645: 14x4
#1004 @ 359,826: 16x23
#1005 @ 799,73: 12x12
#1006 @ 532,367: 23x28
#1007 @ 656,823: 17x10
#1008 @ 113,477: 21x24
#1009 @ 273,812: 17x17
#1010 @ 544,941: 15x23
#1011 @ 226,181: 13x10
#1012 @ 42,750: 10x22
#1013 @ 940,489: 26x22
#1014 @ 920,348: 12x16
#1015 @ 400,818: 12x14
#1016 @ 427,390: 24x29
#1017 @ 26,238: 29x12
#1018 @ 731,132: 16x12
#1019 @ 687,971: 26x21
#1020 @ 555,864: 14x24
#1021 @ 759,345: 24x13
#1022 @ 27,329: 18x23
#1023 @ 683,948: 26x27
#1024 @ 638,29: 28x23
#1025 @ 574,64: 12x14
#1026 @ 196,148: 16x11
#1027 @ 107,497: 21x29
#1028 @ 425,211: 19x28
#1029 @ 437,593: 22x27
#1030 @ 144,516: 28x28
#1031 @ 28,601: 11x25
#1032 @ 958,725: 18x29
#1033 @ 777,648: 27x22
#1034 @ 299,576: 16x10
#1035 @ 6,916: 16x22
#1036 @ 114,894: 16x19
#1037 @ 265,683: 23x26
#1038 @ 271,420: 10x20
#1039 @ 204,106: 29x11
#1040 @ 809,242: 23x10
#1041 @ 158,848: 24x14
#1042 @ 55,202: 29x13
#1043 @ 405,220: 24x22
#1044 @ 844,900: 15x16
#1045 @ 558,269: 18x29
#1046 @ 944,123: 18x26
#1047 @ 561,754: 14x24
#1048 @ 648,427: 16x11
#1049 @ 957,204: 28x17
#1050 @ 246,285: 21x26
#1051 @ 463,398: 28x27
#1052 @ 925,306: 22x13
#1053 @ 286,630: 24x21
#1054 @ 687,860: 10x18
#1055 @ 178,479: 10x20
#1056 @ 273,150: 19x20
#1057 @ 26,686: 16x24
#1058 @ 245,71: 28x29
#1059 @ 140,794: 21x18
#1060 @ 733,490: 27x20
#1061 @ 661,574: 16x17
#1062 @ 487,330: 27x13
#1063 @ 787,621: 14x29
#1064 @ 175,871: 5x11
#1065 @ 286,512: 10x18
#1066 @ 497,258: 16x28
#1067 @ 56,296: 25x16
#1068 @ 790,964: 22x27
#1069 @ 345,360: 16x21
#1070 @ 487,262: 17x19
#1071 @ 813,130: 26x22
#1072 @ 492,922: 11x16
#1073 @ 275,150: 12x10
#1074 @ 907,307: 17x28
#1075 @ 417,822: 14x15
#1076 @ 737,423: 20x21
#1077 @ 183,610: 29x22
#1078 @ 172,334: 28x10
#1079 @ 231,265: 15x18
#1080 @ 584,971: 10x25
#1081 @ 863,802: 10x8
#1082 @ 551,563: 20x21
#1083 @ 612,208: 24x11
#1084 @ 857,384: 12x15
#1085 @ 698,767: 28x23
#1086 @ 54,183: 12x26
#1087 @ 391,555: 15x28
#1088 @ 428,382: 21x13
#1089 @ 908,69: 16x12
#1090 @ 785,632: 16x22
#1091 @ 51,654: 11x21
#1092 @ 459,457: 18x17
#1093 @ 352,369: 15x15
#1094 @ 564,724: 13x25
#1095 @ 420,706: 23x14
#1096 @ 371,953: 18x15
#1097 @ 131,8: 13x19
#1098 @ 515,825: 25x22
#1099 @ 660,828: 21x20
#1100 @ 567,664: 29x11
#1101 @ 75,479: 24x18
#1102 @ 901,708: 27x12
#1103 @ 170,468: 15x19
#1104 @ 562,722: 16x14
#1105 @ 746,554: 18x29
#1106 @ 523,228: 27x22
#1107 @ 505,930: 26x20
#1108 @ 164,531: 14x23
#1109 @ 451,71: 25x17
#1110 @ 559,480: 18x27
#1111 @ 567,320: 13x22
#1112 @ 701,36: 16x16
#1113 @ 357,114: 24x27
#1114 @ 927,88: 25x10
#1115 @ 622,744: 17x16
#1116 @ 160,379: 22x19
#1117 @ 320,188: 25x16
#1118 @ 88,341: 12x13
#1119 @ 590,321: 21x26
#1120 @ 957,505: 24x23
#1121 @ 901,677: 16x17
#1122 @ 85,829: 18x26
#1123 @ 651,580: 16x14
#1124 @ 168,538: 19x28
#1125 @ 930,250: 29x11
#1126 @ 355,367: 21x21
#1127 @ 861,800: 17x14
#1128 @ 622,306: 16x16
#1129 @ 543,951: 11x13
#1130 @ 122,950: 16x11
#1131 @ 264,695: 17x11
#1132 @ 132,0: 26x17
#1133 @ 971,300: 28x19
#1134 @ 742,98: 20x23
#1135 @ 807,370: 13x21
#1136 @ 154,954: 18x28
#1137 @ 803,285: 26x25
#1138 @ 422,393: 14x15
#1139 @ 513,572: 11x20
#1140 @ 530,301: 16x24
#1141 @ 633,177: 26x15
#1142 @ 389,624: 15x26
#1143 @ 911,83: 14x17
#1144 @ 629,408: 23x21
#1145 @ 769,692: 11x17
#1146 @ 80,113: 23x29
#1147 @ 811,912: 26x22
#1148 @ 891,246: 10x10
#1149 @ 731,877: 13x14
#1150 @ 210,784: 10x29
#1151 @ 233,647: 25x24
#1152 @ 771,463: 15x20
#1153 @ 450,117: 27x16
#1154 @ 932,704: 18x16
#1155 @ 792,915: 10x17
#1156 @ 542,686: 24x27
#1157 @ 335,704: 21x22
#1158 @ 203,399: 14x21
#1159 @ 911,460: 18x12
#1160 @ 963,475: 25x26
#1161 @ 291,514: 23x13
#1162 @ 30,811: 23x13
#1163 @ 947,274: 18x21
#1164 @ 222,471: 22x24
#1165 @ 443,588: 25x10
#1166 @ 666,874: 28x21
#1167 @ 518,828: 27x16
#1168 @ 108,443: 11x21
#1169 @ 446,539: 27x29
#1170 @ 514,224: 25x22
#1171 @ 258,91: 11x11
#1172 @ 326,28: 24x12
#1173 @ 253,550: 24x26
#1174 @ 580,824: 17x25
#1175 @ 766,705: 10x14
#1176 @ 976,892: 19x17
#1177 @ 806,955: 14x16
#1178 @ 561,770: 15x27
#1179 @ 819,136: 10x14
#1180 @ 431,616: 20x27
#1181 @ 676,979: 16x21
#1182 @ 648,742: 16x14
#1183 @ 650,106: 27x22
#1184 @ 515,539: 18x13
#1185 @ 22,952: 14x22
#1186 @ 185,332: 23x22
#1187 @ 155,769: 14x21
#1188 @ 908,75: 26x10
#1189 @ 849,229: 18x16
#1190 @ 795,814: 26x19
#1191 @ 346,233: 25x17
#1192 @ 696,77: 22x10
#1193 @ 213,437: 18x23
#1194 @ 403,724: 17x23
#1195 @ 35,503: 23x25
#1196 @ 131,593: 11x15
#1197 @ 41,894: 21x27
#1198 @ 380,87: 29x13
#1199 @ 786,759: 12x20
#1200 @ 801,43: 27x26
#1201 @ 465,412: 21x14
#1202 @ 548,691: 26x22
#1203 @ 812,235: 11x14
#1204 @ 762,17: 26x14
#1205 @ 897,241: 20x20
#1206 @ 319,291: 11x29
#1207 @ 88,800: 29x27
#1208 @ 385,915: 17x26
#1209 @ 113,10: 24x21
#1210 @ 227,220: 24x26
#1211 @ 728,821: 19x19
#1212 @ 392,571: 17x16
#1213 @ 157,983: 8x3
#1214 @ 572,429: 16x29
#1215 @ 393,348: 11x20
#1216 @ 373,884: 14x11
#1217 @ 905,711: 27x25
#1218 @ 310,872: 12x12
#1219 @ 194,322: 11x26
#1220 @ 802,261: 13x18
#1221 @ 543,284: 18x21
#1222 @ 689,408: 24x20
#1223 @ 544,148: 13x29
#1224 @ 673,69: 21x13
#1225 @ 810,368: 22x25
#1226 @ 304,626: 23x15
#1227 @ 793,73: 21x15
#1228 @ 635,931: 22x28
#1229 @ 303,193: 20x19
#1230 @ 65,20: 27x26
#1231 @ 497,253: 16x19
#1232 @ 441,245: 6x13
#1233 @ 482,973: 16x21
#1234 @ 341,664: 17x27
#1235 @ 299,193: 23x14
#1236 @ 392,906: 16x28
#1237 @ 711,715: 24x14
#1238 @ 624,279: 18x16
#1239 @ 855,298: 16x23
#1240 @ 616,211: 13x13
#1241 @ 268,675: 25x12
#1242 @ 287,925: 16x15
#1243 @ 184,561: 28x11
#1244 @ 855,829: 27x15
#1245 @ 446,241: 10x25
#1246 @ 526,758: 18x10
#1247 @ 776,260: 28x23
#1248 @ 946,208: 26x12
#1249 @ 762,707: 11x26
#1250 @ 177,715: 16x26
#1251 @ 737,72: 11x11
#1252 @ 638,166: 12x13
#1253 @ 347,956: 29x19
#1254 @ 597,457: 26x23
#1255 @ 194,552: 12x25
#1256 @ 572,968: 16x23
#1257 @ 347,60: 10x16
#1258 @ 128,666: 17x16
#1259 @ 334,232: 15x3
#1260 @ 465,315: 15x23
#1261 @ 738,533: 12x22
#1262 @ 25,208: 27x27
#1263 @ 431,71: 13x27
#1264 @ 168,784: 23x17
#1265 @ 848,386: 21x13
#1266 @ 740,331: 15x24
#1267 @ 513,743: 20x18
#1268 @ 698,60: 10x20
#1269 @ 56,816: 23x16
#1270 @ 379,162: 18x22
#1271 @ 194,694: 24x11
#1272 @ 383,827: 20x11
#1273 @ 435,600: 20x29
#1274 @ 736,928: 27x18
#1275 @ 583,832: 23x11
#1276 @ 775,114: 19x15
#1277 @ 549,348: 20x26
#1278 @ 511,967: 29x25
#1279 @ 39,885: 19x17
#1280 @ 437,4: 15x23
#1281 @ 752,17: 29x18
#1282 @ 570,125: 19x10
#1283 @ 898,955: 19x19
#1284 @ 758,432: 17x22
#1285 @ 797,588: 17x28
#1286 @ 125,894: 14x23
#1287 @ 56,630: 25x17
#1288 @ 851,111: 11x14
#1289 @ 642,806: 11x11
#1290 @ 80,813: 12x19
#1291 @ 633,952: 10x28
#1292 @ 230,425: 12x17
#1293 @ 867,811: 22x26
#1294 @ 80,346: 20x25
#1295 @ 713,338: 16x26
#1296 @ 377,946: 26x28
#1297 @ 274,335: 19x14
#1298 @ 798,698: 22x18
#1299 @ 149,195: 12x26
#1300 @ 339,57: 22x20
#1301 @ 652,225: 11x14
#1302 @ 936,759: 17x29
#1303 @ 162,489: 18x26
#1304 @ 551,78: 11x17
#1305 @ 606,914: 27x16
#1306 @ 83,815: 5x13
#1307 @ 139,844: 28x10
#1308 @ 515,187: 29x10
#1309 @ 320,358: 14x15
#1310 @ 336,21: 19x16
#1311 @ 420,598: 20x26`;

module.exports = {
  inputArray: input.split('\n')
}
