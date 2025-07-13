export interface Category {
  id: string;
  name: string;
  slug: string;
  folder: string;
  description: string;
  coverImage: string;
}

export interface GalleryImage {
  id: string;
  filename: string;
  alt: string;
}

export const categories: Category[] = [
  {
    id: 'fairy-tales',
    name: 'Fairy Tales',
    slug: 'fairy-tales',
    folder: 'Fairy tales',
    description: 'Enchanting costumes from beloved fairy tales',
    coverImage: '1369.JPG'
  },
  {
    id: 'huge-dolls',
    name: 'Huge Dolls',
    slug: 'huge-dolls',
    folder: 'Huge Dolls',
    description: 'Larger than life costume creations',
    coverImage: '871.JPG'
  },
  {
    id: 'military',
    name: 'Military',
    slug: 'military',
    folder: 'Military',
    description: 'Historical military and uniform costumes',
    coverImage: '1245.JPG'
  },
  {
    id: 'periodic',
    name: 'Periodic',
    slug: 'periodic',
    folder: 'Periodic',
    description: 'Historical period costume collection',
    coverImage: '1062.JPG'
  },
  {
    id: 'vintage',
    name: 'Vintage',
    slug: 'vintage',
    folder: 'Vintage',
    description: 'Classic vintage costume designs',
    coverImage: '1142.JPG'
  },
  {
    id: 'studio',
    name: 'Studio',
    slug: 'studio',
    folder: 'Studio',
    description: 'Professional studio costume collection',
    coverImage: '1150.JPG'
  }
];

// Optional: Keep the categoryImages mapping if needed for reference
const categoryImages: Record<string, string[]> = {
  'fairy-tales': [
    '1369.JPG', '1370.JPG', '1371.JPG', '1372.JPG', '1373.JPG', '1374.JPG', '1375.JPG', 
    '1376.JPG', '1377.JPG', '1378.JPG', '1379.JPG', '1380.JPG', '1381.JPG', '1382.JPG',
    '1383.JPG', '1384.JPG', '1385.JPG', '1386.JPG', '1387.JPG', '1388.JPG', '1390.JPG',
    '1391.JPG', '1392.JPG', '1393.JPG', '1394.JPG', '1395.JPG', '1396.JPG', '1398.JPG',
    '1399.JPG', '1400.JPG', '1401.JPG', '1402.JPG', '1403.JPG', '1404.JPG', '1405.JPG',
    '1406.JPG', '1407.JPG', '1408.JPG', '1409.JPG', '1410.JPG', '1412.JPG', '1413.JPG',
    '1414.JPG', '1415.JPG', '1416.JPG'
  ],
  'huge-dolls': [
    '871.JPG', '872.JPG', '873.JPG', '874.JPG', '875.JPG', '876.JPG', '877.JPG',
    '878.JPG', '879.JPG', '880.JPG', '881.JPG', '882.JPG', '883.JPG', '884.JPG',
    '885.JPG', '886.JPG', '888.JPG', '889.JPG', '891.JPG', '892.JPG', '1894.jpg',
    '1895.jpg', '1896.jpg'
  ],
  'military': [
    '1245.JPG', '1268.JPG', '1269.JPG', '1297.JPG', '1298.JPG', '1299.JPG', '1300.JPG',
    '1305.JPG', '1306.JPG', '1345.JPG', '1347.JPG', '1348.JPG', '1349.JPG', '1350.JPG',
    '1351.JPG', '1352.JPG', '1353.JPG', '1354.JPG', '1355.JPG', '1356.JPG', '1357.JPG',
    '1358.JPG', '1359.JPG', '1632.JPG', '1634.JPG', '1635.JPG', '1856.JPG', '1862.JPG',
    '1864.JPG', '1865.JPG', '1866.JPG', '1867.JPG', '1899.jpg', '1900.jpg', '1901.jpg',
    '1902.JPG', '1908.JPG', '646.JPG', '647.JPG'
  ],
  'periodic': [
    '1062.JPG', '1063.JPG', '1064.JPG', '1065.JPG', '1066.JPG', '1067.JPG', '1068.JPG',
    '1069.JPG', '1072.JPG', '1073.JPG', '1074.JPG', '1075.JPG', '1076.JPG', '1077.JPG',
    '1078.JPG', '1079.JPG', '1080.JPG', '1081.JPG', '1134.JPG', '1136.JPG', '1137.JPG',
    '1138.JPG', '1140.JPG', '1141.JPG', '1173.JPG', '1174.JPG', '1175.JPG', '1176.JPG',
    '1177.JPG', '1178.JPG', '1179.JPG', '1180.JPG', '1181.JPG', '1182.JPG', '1183.JPG'
  ],
  'vintage': [
    '1142.JPG', '1143.JPG', '1145.JPG', '1146.JPG', '1147.JPG', '1148.JPG', '1149.JPG',
    '1166.JPG', '1167.JPG', '1168.JPG', '1169.JPG', '1170.JPG', '1171.JPG', '1206.JPG',
    '1207.JPG', '1208.JPG', '1209.JPG', '1210.JPG', '1211.JPG', '1212.JPG', '1213.JPG',
    '1214.JPG', '1215.JPG', '1216.JPG', '1217.JPG', '1218.JPG', '1219.JPG', '1220.JPG'
  ],
  'studio': [
    '1150.JPG', '1151.JPG', '1156.JPG', '1157.JPG', '1160.JPG', '1466.JPG', '1467.JPG',
    '1468.JPG', '1469.JPG', '1470.JPG', '1471.JPG', '1472.JPG', '1473.JPG', '1474.JPG',
    '1475.JPG', '1476.JPG', '1477.JPG', '1806.JPG', '1807.JPG', '1808.JPG', '1809.JPG',
    '1810.JPG', '1811.JPG', '1868.JPG', '1869.JPG', '1870.JPG', '1871.JPG', '1872.JPG'
  ]
};
