# Road bot report

Run: `?dev&fresh&proof&bot&level=easy&seed=1&spread=3&kmh=50&steps=6`, maxIssues=150, 10 min. 5 trips, 7.07 km, 1004 s of game time.

Map colours (map.png, dark mode): grey network routes, light-blue driven session path, cut red, hole purple, grass green, height orange, offroad blue, stuck white, lost pink, kink cyan, bump brown.

Found (69): 3 height, 1 steep, 62 detour, 3 bump

| id | kind | street (edge / junction) | where (x, z) | what | picture |
|---|---|---|---|---|---|
| 1 | height | Boulevard Pasteur (#2478) | 2500.64, -1770.04 | drawn road 0.19 m from the driven road | [jpg](1-height.jpg) |
| 2 | height | Boulevard Pasteur (#2478) | 2504.59, -1769.39 | drawn road 0.16 m from the driven road | [jpg](2-height.jpg) |
| 69 | height | Place du Maroc (#5167 / J1651) | 2256.56, -305.79 | drawn road -0.20 m from the driven road | [jpg](69-height.jpg) |
| 59 | steep | Rue 6 (#1200 / J1322) | 857.6, 1255.58 | steep grade 30.7% on #1200 | [jpg](59-steep.jpg) |
| 3 | detour | Rue Mohamed Abdou (#68 / J84) | 2457.76, -1555.62 | excessive detour J84->J1415: 491m vs 43m (11.5x) | [jpg](3-detour.jpg) |
| 4 | detour | Avenue de Fès (#2149 / J2222) | 2375.65, -1455.54 | excessive detour J2222->J1959: 641m vs 22m (28.7x) | [jpg](4-detour.jpg) |
| 5 | detour | Rue Perou (#92 / J117) | 2335.95, -1302.09 | excessive detour J117->J53: 644m vs 37m (17.6x) | [jpg](5-detour.jpg) |
| 6 | detour | Rue Allal Ben Abdallah (#45 / J54) | 2333.24, -1269.85 | excessive detour J54->J117: 395m vs 32m (12.2x) | [jpg](6-detour.jpg) |
| 7 | detour | Rue Egypte (#1752 / J1892) | 2426.18, -1011.88 | excessive detour J1892->J1904: 944m vs 64m (14.8x) | [jpg](7-detour.jpg) |
| 8 | detour | Avenue de la Marche Verte (#60 / J75) | 2489.34, -816.17 | excessive detour J75->J74: 615m vs 51m (12.1x) | [jpg](8-detour.jpg) |
| 9 | detour | Rue Omar Bnou Khattab (#1564 / J1675) | 2856.56, -647.16 | excessive detour J1675->J103: 341m vs 28m (12.2x) | [jpg](9-detour.jpg) |
| 10 | detour | Rue Abi Jarir Tabari (#1554 / J1665) | 3285.13, -776.14 | excessive detour J1665->J121: 564m vs 34m (16.5x) | [jpg](10-detour.jpg) |
| 11 | detour | Avenue Ludwig Van Beethoven (#1590 / J1701) | 3424.98, -806.16 | excessive detour J1701->J1138: 294m vs 26m (11.4x) | [jpg](11-detour.jpg) |
| 12 | detour | Avenue Idriss Premier (#2994 / J2845) | 3725.43, -750.57 | excessive detour J2845->J1300: 1051m vs 21m (49.6x) | [jpg](12-detour.jpg) |
| 13 | detour | Place de la Ligue Arabe (#2643 / J2615) | 3298.66, -492.59 | excessive detour J2615->J2614: 260m vs 26m (10.2x) | [jpg](13-detour.jpg) |
| 14 | detour | Rue Maarakat Sidi Otman (#169 / J202) | 3562.12, -102.3 | excessive detour J202->J2879: 463m vs 20m (23.3x) | [jpg](14-detour.jpg) |
| 15 | detour | Rue Ahmed Skiredj (#309 / J351) | 3212.95, 42.25 | excessive detour J351->J181: 778m vs 34m (22.7x) | [jpg](15-detour.jpg) |
| 16 | detour | Rue Khneta Al Mokhafri (#149 / J178) | 2907.98, 114.53 | excessive detour J178->J177: 197m vs 19m (10.4x) | [jpg](16-detour.jpg) |
| 17 | detour | Rue de la Province (#3156 / J2929) | 2926.93, 213.49 | excessive detour J2929->J496: 488m vs 41m (12.0x) | [jpg](17-detour.jpg) |
| 18 | detour | Rue Normandie (#434 / J495) | 2724.83, 245.74 | excessive detour J495->J153: 634m vs 40m (15.7x) | [jpg](18-detour.jpg) |
| 19 | detour | Boulevard Moulay Soulayman (#1433 / J1545) | 2440.61, 115.64 | excessive detour J1545->J1544: 193m vs 18m (10.7x) | [jpg](19-detour.jpg) |
| 20 | detour | Rue Rahal Ben Ahmed (#341 / J391) | 2184.37, 302.45 | excessive detour J391->J414: 346m vs 23m (14.8x) | [jpg](20-detour.jpg) |
| 21 | detour | Rue 38 (#3543 / J3180) | 2143.77, 362.5 | excessive detour J3180->J392: 351m vs 34m (10.2x) | [jpg](21-detour.jpg) |
| 22 | detour | Rue Mohamed Amkik (#3146 / J373) | 2387.38, 540.41 | excessive detour J373->J412: 556m vs 39m (14.3x) | [jpg](22-detour.jpg) |
| 23 | detour | Rue 3 (#328 / J372) | 2395.5, 628.25 | excessive detour J372->J394: 570m vs 55m (10.4x) | [jpg](23-detour.jpg) |
| 24 | detour | Rue Med Ben Ahmed Hayani (#4462 / J3683) | 2162.72, 677.18 | excessive detour J3683->J396: 504m vs 42m (12.0x) | [jpg](24-detour.jpg) |
| 25 | detour | Rue Dris Ben Med Ben Bouchaib Lahrizi (#3555 / J3184) | 2132.94, 710.54 | excessive detour J3184->J3683: 469m vs 45m (10.5x) | [jpg](25-detour.jpg) |
| 26 | detour | Rue 41 (#1067 / J1181) | 2689.64, 894.01 | excessive detour J1181->J2802: 202m vs 17m (11.7x) | [jpg](26-detour.jpg) |
| 27 | detour | Rue 54 (#1068 / J1183) | 2689.64, 925.14 | excessive detour J1183->J1180: 202m vs 16m (12.7x) | [jpg](27-detour.jpg) |
| 28 | detour | Rue Martyre Karou Hamoudada (#1975 / J2075) | 2473.1, 1294.31 | excessive detour J2075->J2084: 165m vs 15m (10.8x) | [jpg](28-detour.jpg) |
| 29 | detour | Rue 6 (#3289 / J3024) | 3478.21, 1423.3 | excessive detour J3024->J1497: 394m vs 21m (18.5x) | [jpg](29-detour.jpg) |
| 30 | detour | - (#1364 / J1490) | 3604.53, 1376.6 | excessive detour J1490->J2666: 516m vs 16m (31.9x) | [jpg](30-detour.jpg) |
| 31 | detour | Avenue R'gaia (#1075 / J1191) | 3632.5, 1296.53 | excessive detour J1191->J1190: 359m vs 24m (15.0x) | [jpg](31-detour.jpg) |
| 32 | detour | Avenue Al Quds (#4330 / J3632) | 3688.44, 1666.81 | excessive detour J3632->J3721: 878m vs 72m (12.2x) | [jpg](32-detour.jpg) |
| 33 | detour | Rue Achahida Barni Aicha (#899 / J1009) | 3994.31, 1126.41 | excessive detour J1009->J1496: 418m vs 40m (10.5x) | [jpg](33-detour.jpg) |
| 34 | detour | Route de Tétouan (#3014 / J2854) | 4266.79, 731.66 | excessive detour J2854->J2415: 1482m vs 46m (32.0x) | [jpg](34-detour.jpg) |
| 35 | detour | Route de Tétouan (#4621 / J3734) | 4014.16, 295.78 | excessive detour J3734->J2429: 815m vs 79m (10.3x) | [jpg](35-detour.jpg) |
| 36 | detour | Rue Omar El Mokhtar (#998 / J1102) | 3404.23, 538.18 | excessive detour J1102->J2885: 194m vs 18m (11.1x) | [jpg](36-detour.jpg) |
| 37 | detour | Rue Ibn Okail (#5411 / J3955) | 3256.26, -1249.83 | excessive detour J3955->J51: 380m vs 25m (15.5x) | [jpg](37-detour.jpg) |
| 38 | detour | Avenue Abou Bakr Arrazi (#4608 / J3723) | 3221.97, -1249.83 | excessive detour J3723->J3927: 400m vs 26m (15.4x) | [jpg](38-detour.jpg) |
| 39 | detour | Rue Ibn Abi Wakas (#28 / J38) | 2885.43, -1309.88 | excessive detour J38->J11: 847m vs 69m (12.2x) | [jpg](39-detour.jpg) |
| 40 | detour | Boulevard Mohamed V (#4964 / J3869) | 2907.08, -1516.7 | excessive detour J3869->J3966: 289m vs 24m (12.1x) | [jpg](40-detour.jpg) |
| 41 | detour | Rue Moutamid Ben Abbad (#289 / J330) | 3118.21, -1626.78 | excessive detour J330->J333: 915m vs 31m (29.6x) | [jpg](41-detour.jpg) |
| 43 | detour | Rue de la Plage (#1275 / J1403) | 2481.22, -2149.4 | excessive detour J1403->J500: 415m vs 32m (13.1x) | [jpg](43-detour.jpg) |
| 44 | detour | Rue d'Angleterre (#437 / J501) | 2318.81, -2052.66 | excessive detour J501->J1413: 604m vs 49m (12.3x) | [jpg](44-detour.jpg) |
| 45 | detour | Rue Amerique du Sud (#1283 / J1413) | 2313.4, -2003.74 | excessive detour J1413->J2460: 730m vs 21m (35.5x) | [jpg](45-detour.jpg) |
| 46 | detour | Rue Hollande (#2416 / J2460) | 2305.27, -1984.83 | excessive detour J2460->J2462: 480m vs 25m (19.5x) | [jpg](46-detour.jpg) |
| 47 | detour | Rue d'Angleterre (#5287 / J1410) | 2210.54, -1930.35 | excessive detour J1410->J3802: 737m vs 36m (20.2x) | [jpg](47-detour.jpg) |
| 48 | detour | Avenue Msallah (#80 / J102) | 2209.64, -1680.16 | excessive detour J102->J3641: 1004m vs 30m (33.7x) | [jpg](48-detour.jpg) |
| 49 | detour | Rue du Mexique (#5485 / J3641) | 2202.42, -1651.25 | excessive detour J3641->J3969: 781m vs 60m (13.0x) | [jpg](49-detour.jpg) |
| 50 | detour | Avenue Josafat (#4377 / J3651) | 2233.09, -2317.31 | excessive detour J3651->J3762: 1447m vs 67m (21.7x) | [jpg](50-detour.jpg) |
| 51 | detour | Rue Chakib Arsalane (#441 / J509) | 2044.52, -2454.08 | excessive detour J509->J1399: 763m vs 44m (17.4x) | [jpg](51-detour.jpg) |
| 53 | detour | Rue Shakespeare (#1089 / J1210) | 1341.66, -2912.2 | excessive detour J1210->J1215: 413m vs 23m (17.6x) | [jpg](53-detour.jpg) |
| 54 | detour | - (#5000 / J2167) | 423.16, -2456.3 | excessive detour J2167->J1432: 462m vs 20m (22.6x) | [jpg](54-detour.jpg) |
| 55 | detour | Rue Abdelkarim Ben Tabit (#3365 / J3073) | 1086.32, -588.22 | excessive detour J3073->J3673: 158m vs 15m (10.5x) | [jpg](55-detour.jpg) |
| 56 | detour | Rue 161 (#1300 / J1430) | 1604.22, -672.73 | excessive detour J1430->J1373: 440m vs 41m (10.8x) | [jpg](56-detour.jpg) |
| 57 | detour | Rue Martyre Mohamed Ben Lahcen (#676 / J779) | 506.17, -37.81 | excessive detour J779->J2123: 184m vs 18m (10.3x) | [jpg](57-detour.jpg) |
| 58 | detour | - (#3264 / J3004) | 90.23, 223.5 | excessive detour J3004->J661: 429m vs 28m (15.2x) | [jpg](58-detour.jpg) |
| 60 | detour | Avenue des Forces Armées Royales (#2711 / J1552) | 1541.96, 646.04 | excessive detour J1552->J3769: 2456m vs 116m (21.3x) | [jpg](60-detour.jpg) |
| 61 | detour | - (#4131 / J3529) | -1006.92, 1265.4 | excessive detour J3529->J2263: 704m vs 18m (40.1x) | [jpg](61-detour.jpg) |
| 62 | detour | Rue Berkane (#4338 / J3637) | 3867.99, -1299.87 | excessive detour J3637->J3715: 838m vs 19m (45.1x) | [jpg](62-detour.jpg) |
| 63 | detour | Avenue Mohammed VI (#435 / J497) | 4200.92, -1184.23 | excessive detour J497->J3884: 1962m vs 60m (32.7x) | [jpg](63-detour.jpg) |
| 64 | detour | - (#1622 / J1735) | 4789.2, -845.08 | excessive detour J1735->J1741: 189m vs 18m (10.8x) | [jpg](64-detour.jpg) |
| 65 | detour | - (#4291) | 5028.3, -865.1 | excessive detour J3615->J2239: 620m vs 32m (19.7x) | [jpg](65-detour.jpg) |
| 67 | detour | Rue 6 (#1636 / J1755) | 5967.55, -1517.81 | excessive detour J1755->J2715: 825m vs 20m (40.7x) | [jpg](67-detour.jpg) |
| 68 | detour | Route du Charf (#1258 / J1380) | 4772.05, 1835.83 | excessive detour J1380->J1561: 1875m vs 29m (63.7x) | [jpg](68-detour.jpg) |
| 42 | bump | Rue Antaki (#292 / J330) | 3118.06, -1626.91 | suspension 0.30 m, vertical -0.1 m/s | [jpg](42-bump.jpg) |
| 52 | bump | Avenue Ibn Al Abbar (#1270 / J509) | 2044.53, -2454.07 | suspension 0.32 m, vertical -0.2 m/s | [jpg](52-bump.jpg) |
| 66 | bump | Rue Plage Torresse (#4194) | 6051.31, -322.94 | suspension 0.00 m, vertical 10.4 m/s | [jpg](66-bump.jpg) |
