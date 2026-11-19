# Road bot findings, checked again

65 of 69 fixed. Pictures: ../before/<name> (when found) and ./<name> (now).

| id | kind | street | where (x, z) | found | now | fixed | picture |
|---|---|---|---|---|---|---|---|
| 1 | height | Boulevard Pasteur | 2500.64, -1770.04 | drawn road 0.19 m from the driven road | drawn road -0.01 m from the driven road | yes | [before](../before/1-height.jpg) / [after](1-height.jpg) |
| 2 | height | Boulevard Pasteur | 2504.59, -1769.39 | drawn road 0.16 m from the driven road | drawn road 0.01 m from the driven road | yes | [before](../before/2-height.jpg) / [after](2-height.jpg) |
| 69 | height | Place du Maroc | 2256.56, -305.79 | drawn road -0.20 m from the driven road | drawn road 0.01 m from the driven road | yes | [before](../before/69-height.jpg) / [after](69-height.jpg) |
| 59 | steep | Rue 6 | 857.6, 1255.58 | steep grade 30.7% on #1200 | steep grade 30.7% on #1200 | no | [before](../before/59-steep.jpg) / [after](59-steep.jpg) |
| 3 | detour | Rue Mohamed Abdou | 2457.76, -1555.62 | excessive detour J84->J1415: 491m vs 43m (11.5x) | 42 m by road for 43 m | yes | [before](../before/3-detour.jpg) / [after](3-detour.jpg) |
| 4 | detour | Avenue de Fès | 2375.65, -1455.54 | excessive detour J2222->J1959: 641m vs 22m (28.7x) | 21 m by road for 22 m | yes | [before](../before/4-detour.jpg) / [after](4-detour.jpg) |
| 5 | detour | Rue Perou | 2335.95, -1302.09 | excessive detour J117->J53: 644m vs 37m (17.6x) | 67 m by road for 37 m | yes | [before](../before/5-detour.jpg) / [after](5-detour.jpg) |
| 6 | detour | Rue Allal Ben Abdallah | 2333.24, -1269.85 | excessive detour J54->J117: 395m vs 32m (12.2x) | 31 m by road for 32 m | yes | [before](../before/6-detour.jpg) / [after](6-detour.jpg) |
| 7 | detour | Rue Egypte | 2426.18, -1011.88 | excessive detour J1892->J1904: 944m vs 64m (14.8x) | 83 m by road for 64 m | yes | [before](../before/7-detour.jpg) / [after](7-detour.jpg) |
| 8 | detour | Avenue de la Marche Verte | 2489.34, -816.17 | excessive detour J75->J74: 615m vs 51m (12.1x) | 445 m by road for 51 m | yes | [before](../before/8-detour.jpg) / [after](8-detour.jpg) |
| 9 | detour | Rue Omar Bnou Khattab | 2856.56, -647.16 | excessive detour J1675->J103: 341m vs 28m (12.2x) | 219 m by road for 28 m | yes | [before](../before/9-detour.jpg) / [after](9-detour.jpg) |
| 10 | detour | Rue Abi Jarir Tabari | 3285.13, -776.14 | excessive detour J1665->J121: 564m vs 34m (16.5x) | 33 m by road for 34 m | yes | [before](../before/10-detour.jpg) / [after](10-detour.jpg) |
| 11 | detour | Avenue Ludwig Van Beethoven | 3424.98, -806.16 | excessive detour J1701->J1138: 294m vs 26m (11.4x) | 282 m by road for 26 m | no | [before](../before/11-detour.jpg) / [after](11-detour.jpg) |
| 12 | detour | Avenue Idriss Premier | 3725.43, -750.57 | excessive detour J2845->J1300: 1051m vs 21m (49.6x) | 433 m by road for 21 m | no | [before](../before/12-detour.jpg) / [after](12-detour.jpg) |
| 13 | detour | Place de la Ligue Arabe | 3298.66, -492.59 | excessive detour J2615->J2614: 260m vs 26m (10.2x) | 25 m by road for 26 m | yes | [before](../before/13-detour.jpg) / [after](13-detour.jpg) |
| 14 | detour | Rue Maarakat Sidi Otman | 3562.12, -102.3 | excessive detour J202->J2879: 463m vs 20m (23.3x) | 19 m by road for 20 m | yes | [before](../before/14-detour.jpg) / [after](14-detour.jpg) |
| 15 | detour | Rue Ahmed Skiredj | 3212.95, 42.25 | excessive detour J351->J181: 778m vs 34m (22.7x) | 33 m by road for 34 m | yes | [before](../before/15-detour.jpg) / [after](15-detour.jpg) |
| 16 | detour | Rue Khneta Al Mokhafri | 2907.98, 114.53 | excessive detour J178->J177: 197m vs 19m (10.4x) | 18 m by road for 19 m | yes | [before](../before/16-detour.jpg) / [after](16-detour.jpg) |
| 17 | detour | Rue de la Province | 2926.93, 213.49 | excessive detour J2929->J496: 488m vs 41m (12.0x) | 40 m by road for 41 m | yes | [before](../before/17-detour.jpg) / [after](17-detour.jpg) |
| 18 | detour | Rue Normandie | 2724.83, 245.74 | excessive detour J495->J153: 634m vs 40m (15.7x) | 39 m by road for 40 m | yes | [before](../before/18-detour.jpg) / [after](18-detour.jpg) |
| 19 | detour | Boulevard Moulay Soulayman | 2440.61, 115.64 | excessive detour J1545->J1544: 193m vs 18m (10.7x) | 176 m by road for 18 m | yes | [before](../before/19-detour.jpg) / [after](19-detour.jpg) |
| 20 | detour | Rue Rahal Ben Ahmed | 2184.37, 302.45 | excessive detour J391->J414: 346m vs 23m (14.8x) | 22 m by road for 23 m | yes | [before](../before/20-detour.jpg) / [after](20-detour.jpg) |
| 21 | detour | Rue 38 | 2143.77, 362.5 | excessive detour J3180->J392: 351m vs 34m (10.2x) | 34 m by road for 34 m | yes | [before](../before/21-detour.jpg) / [after](21-detour.jpg) |
| 22 | detour | Rue Mohamed Amkik | 2387.38, 540.41 | excessive detour J373->J412: 556m vs 39m (14.3x) | 38 m by road for 39 m | yes | [before](../before/22-detour.jpg) / [after](22-detour.jpg) |
| 23 | detour | Rue 3 | 2395.5, 628.25 | excessive detour J372->J394: 570m vs 55m (10.4x) | 54 m by road for 55 m | yes | [before](../before/23-detour.jpg) / [after](23-detour.jpg) |
| 24 | detour | Rue Med Ben Ahmed Hayani | 2162.72, 677.18 | excessive detour J3683->J396: 504m vs 42m (12.0x) | 44 m by road for 42 m | yes | [before](../before/24-detour.jpg) / [after](24-detour.jpg) |
| 25 | detour | Rue Dris Ben Med Ben Bouchaib Lahrizi | 2132.94, 710.54 | excessive detour J3184->J3683: 469m vs 45m (10.5x) | 352 m by road for 45 m | yes | [before](../before/25-detour.jpg) / [after](25-detour.jpg) |
| 26 | detour | Rue 41 | 2689.64, 894.01 | excessive detour J1181->J2802: 202m vs 17m (11.7x) | 137 m by road for 17 m | yes | [before](../before/26-detour.jpg) / [after](26-detour.jpg) |
| 27 | detour | Rue 54 | 2689.64, 925.14 | excessive detour J1183->J1180: 202m vs 16m (12.7x) | 143 m by road for 16 m | yes | [before](../before/27-detour.jpg) / [after](27-detour.jpg) |
| 28 | detour | Rue Martyre Karou Hamoudada | 2473.1, 1294.31 | excessive detour J2075->J2084: 165m vs 15m (10.8x) | 14 m by road for 15 m | yes | [before](../before/28-detour.jpg) / [after](28-detour.jpg) |
| 29 | detour | Rue 6 | 3478.21, 1423.3 | excessive detour J3024->J1497: 394m vs 21m (18.5x) | 20 m by road for 21 m | yes | [before](../before/29-detour.jpg) / [after](29-detour.jpg) |
| 30 | detour | - | 3604.53, 1376.6 | excessive detour J1490->J2666: 516m vs 16m (31.9x) | 15 m by road for 16 m | yes | [before](../before/30-detour.jpg) / [after](30-detour.jpg) |
| 31 | detour | Avenue R'gaia | 3632.5, 1296.53 | excessive detour J1191->J1190: 359m vs 24m (15.0x) | 23 m by road for 24 m | yes | [before](../before/31-detour.jpg) / [after](31-detour.jpg) |
| 32 | detour | Avenue Al Quds | 3688.44, 1666.81 | excessive detour J3632->J3721: 878m vs 72m (12.2x) | 71 m by road for 72 m | yes | [before](../before/32-detour.jpg) / [after](32-detour.jpg) |
| 33 | detour | Rue Achahida Barni Aicha | 3994.31, 1126.41 | excessive detour J1009->J1496: 418m vs 40m (10.5x) | 206 m by road for 40 m | yes | [before](../before/33-detour.jpg) / [after](33-detour.jpg) |
| 34 | detour | Route de Tétouan | 4266.79, 731.66 | excessive detour J2854->J2415: 1482m vs 46m (32.0x) | 45 m by road for 46 m | yes | [before](../before/34-detour.jpg) / [after](34-detour.jpg) |
| 35 | detour | Route de Tétouan | 4014.16, 295.78 | excessive detour J3734->J2429: 815m vs 79m (10.3x) | 746 m by road for 79 m | yes | [before](../before/35-detour.jpg) / [after](35-detour.jpg) |
| 36 | detour | Rue Omar El Mokhtar | 3404.23, 538.18 | excessive detour J1102->J2885: 194m vs 18m (11.1x) | 17 m by road for 18 m | yes | [before](../before/36-detour.jpg) / [after](36-detour.jpg) |
| 37 | detour | Rue Ibn Okail | 3256.26, -1249.83 | excessive detour J3955->J51: 380m vs 25m (15.5x) | 24 m by road for 25 m | yes | [before](../before/37-detour.jpg) / [after](37-detour.jpg) |
| 38 | detour | Avenue Abou Bakr Arrazi | 3221.97, -1249.83 | excessive detour J3723->J3927: 400m vs 26m (15.4x) | 26 m by road for 26 m | yes | [before](../before/38-detour.jpg) / [after](38-detour.jpg) |
| 39 | detour | Rue Ibn Abi Wakas | 2885.43, -1309.88 | excessive detour J38->J11: 847m vs 69m (12.2x) | 123 m by road for 69 m | yes | [before](../before/39-detour.jpg) / [after](39-detour.jpg) |
| 40 | detour | Boulevard Mohamed V | 2907.08, -1516.7 | excessive detour J3869->J3966: 289m vs 24m (12.1x) | 23 m by road for 24 m | yes | [before](../before/40-detour.jpg) / [after](40-detour.jpg) |
| 41 | detour | Rue Moutamid Ben Abbad | 3118.21, -1626.78 | excessive detour J330->J333: 915m vs 31m (29.6x) | 30 m by road for 31 m | yes | [before](../before/41-detour.jpg) / [after](41-detour.jpg) |
| 43 | detour | Rue de la Plage | 2481.22, -2149.4 | excessive detour J1403->J500: 415m vs 32m (13.1x) | 256 m by road for 32 m | yes | [before](../before/43-detour.jpg) / [after](43-detour.jpg) |
| 44 | detour | Rue d'Angleterre | 2318.81, -2052.66 | excessive detour J501->J1413: 604m vs 49m (12.3x) | 76 m by road for 49 m | yes | [before](../before/44-detour.jpg) / [after](44-detour.jpg) |
| 45 | detour | Rue Amerique du Sud | 2313.4, -2003.74 | excessive detour J1413->J2460: 730m vs 21m (35.5x) | 45 m by road for 21 m | yes | [before](../before/45-detour.jpg) / [after](45-detour.jpg) |
| 46 | detour | Rue Hollande | 2305.27, -1984.83 | excessive detour J2460->J2462: 480m vs 25m (19.5x) | 24 m by road for 25 m | yes | [before](../before/46-detour.jpg) / [after](46-detour.jpg) |
| 47 | detour | Rue d'Angleterre | 2210.54, -1930.35 | excessive detour J1410->J3802: 737m vs 36m (20.2x) | 35 m by road for 36 m | yes | [before](../before/47-detour.jpg) / [after](47-detour.jpg) |
| 48 | detour | Avenue Msallah | 2209.64, -1680.16 | excessive detour J102->J3641: 1004m vs 30m (33.7x) | 29 m by road for 30 m | yes | [before](../before/48-detour.jpg) / [after](48-detour.jpg) |
| 49 | detour | Rue du Mexique | 2202.42, -1651.25 | excessive detour J3641->J3969: 781m vs 60m (13.0x) | 59 m by road for 60 m | yes | [before](../before/49-detour.jpg) / [after](49-detour.jpg) |
| 50 | detour | Avenue Josafat | 2233.09, -2317.31 | excessive detour J3651->J3762: 1447m vs 67m (21.7x) | 66 m by road for 67 m | yes | [before](../before/50-detour.jpg) / [after](50-detour.jpg) |
| 51 | detour | Rue Chakib Arsalane | 2044.52, -2454.08 | excessive detour J509->J1399: 763m vs 44m (17.4x) | 43 m by road for 44 m | yes | [before](../before/51-detour.jpg) / [after](51-detour.jpg) |
| 53 | detour | Rue Shakespeare | 1341.66, -2912.2 | excessive detour J1210->J1215: 413m vs 23m (17.6x) | 22 m by road for 23 m | yes | [before](../before/53-detour.jpg) / [after](53-detour.jpg) |
| 54 | detour | - | 423.16, -2456.3 | excessive detour J2167->J1432: 462m vs 20m (22.6x) | 20 m by road for 20 m | yes | [before](../before/54-detour.jpg) / [after](54-detour.jpg) |
| 55 | detour | Rue Abdelkarim Ben Tabit | 1086.32, -588.22 | excessive detour J3073->J3673: 158m vs 15m (10.5x) | 14 m by road for 15 m | yes | [before](../before/55-detour.jpg) / [after](55-detour.jpg) |
| 56 | detour | Rue 161 | 1604.22, -672.73 | excessive detour J1430->J1373: 440m vs 41m (10.8x) | 43 m by road for 41 m | yes | [before](../before/56-detour.jpg) / [after](56-detour.jpg) |
| 57 | detour | Rue Martyre Mohamed Ben Lahcen | 506.17, -37.81 | excessive detour J779->J2123: 184m vs 18m (10.3x) | 17 m by road for 18 m | yes | [before](../before/57-detour.jpg) / [after](57-detour.jpg) |
| 58 | detour | - | 90.23, 223.5 | excessive detour J3004->J661: 429m vs 28m (15.2x) | 27 m by road for 28 m | yes | [before](../before/58-detour.jpg) / [after](58-detour.jpg) |
| 60 | detour | Avenue des Forces Armées Royales | 1541.96, 646.04 | excessive detour J1552->J3769: 2456m vs 116m (21.3x) | 2490 m by road for 116 m | no | [before](../before/60-detour.jpg) / [after](60-detour.jpg) |
| 61 | detour | - | -1006.92, 1265.4 | excessive detour J3529->J2263: 704m vs 18m (40.1x) | 17 m by road for 18 m | yes | [before](../before/61-detour.jpg) / [after](61-detour.jpg) |
| 62 | detour | Rue Berkane | 3867.99, -1299.87 | excessive detour J3637->J3715: 838m vs 19m (45.1x) | 18 m by road for 19 m | yes | [before](../before/62-detour.jpg) / [after](62-detour.jpg) |
| 63 | detour | Avenue Mohammed VI | 4200.92, -1184.23 | excessive detour J497->J3884: 1962m vs 60m (32.7x) | 59 m by road for 60 m | yes | [before](../before/63-detour.jpg) / [after](63-detour.jpg) |
| 64 | detour | - | 4789.2, -845.08 | excessive detour J1735->J1741: 189m vs 18m (10.8x) | 17 m by road for 18 m | yes | [before](../before/64-detour.jpg) / [after](64-detour.jpg) |
| 65 | detour | - | 5028.3, -865.1 | excessive detour J3615->J2239: 620m vs 32m (19.7x) | 32 m by road for 32 m | yes | [before](../before/65-detour.jpg) / [after](65-detour.jpg) |
| 67 | detour | Rue 6 | 5967.55, -1517.81 | excessive detour J1755->J2715: 825m vs 20m (40.7x) | 19 m by road for 20 m | yes | [before](../before/67-detour.jpg) / [after](67-detour.jpg) |
| 68 | detour | Route du Charf | 4772.05, 1835.83 | excessive detour J1380->J1561: 1875m vs 29m (63.7x) | 28 m by road for 29 m | yes | [before](../before/68-detour.jpg) / [after](68-detour.jpg) |
| 42 | bump | Rue Antaki | 3118.06, -1626.91 | suspension 0.30 m, vertical -0.1 m/s | no bump when the car lands and settles there | yes | [before](../before/42-bump.jpg) / [after](42-bump.jpg) |
| 52 | bump | Avenue Ibn Al Abbar | 2044.53, -2454.07 | suspension 0.32 m, vertical -0.2 m/s | no bump when the car lands and settles there | yes | [before](../before/52-bump.jpg) / [after](52-bump.jpg) |
| 66 | bump | Rue Plage Torresse | 6051.31, -322.94 | suspension 0.00 m, vertical 10.4 m/s | no bump when the car lands and settles there | yes | [before](../before/66-bump.jpg) / [after](66-bump.jpg) |

The 4 left on purpose: Rue 6 (#59) is that steep in the real terrain (10 m up over 36 m). #11, #12 and #60 are dual
carriageways (Avenue Ludwig Van Beethoven, Avenue Idriss Premier, Avenue des Forces Armées Royales): to reach the other side a
car has to turn round further on, as in the real city. See docs/ROADBOT.md.

A fresh run after the fixes (all 3,984 routes + 3D checks + 3.5 km of driving) found only these same 4.
