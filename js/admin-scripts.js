/* ================
   DATA UTILS
================== */

// Nombre de las claves en localStorage
const LS_KEYS = {
  productos: "productos",
  clientes: "clientes",
  productosInicializados: "productosInicializados",
  clientesInicializados: "clientesInicializados",
  usuarioActivo: "usuarioActivo"
};

// Estructuras base para inicialización
const productosBase = [
  // PASTELERÍA
            {
                codigo: "PST-001",
                lote: "LOT-PST-001",
                nombre: "Harina Selecta Panadera Premium",
                descripcion: "Harina de alta calidad especial para panificación y repostería. Ideal para panes y tortas.",
                precio: 2800,
                stock: 150,
                stockCritico: 20,
                categoria: "Pastelería",
                fechaElaboracion: "2024-02-15",
                fechaVencimiento: "2024-08-15",
                proveedor: "Molinos San Juan",
                destacado: true
            },
            {
                codigo: "PST-002",
                lote: "LOT-PST-002",
                nombre: "Mantequilla Colún Sin Sal 500g",
                descripcion: "Mantequilla premium sin sal para repostería profesional. Textura cremosa y sabor neutro.",
                precio: 4500,
                stock: 80,
                stockCritico: 15,
                categoria: "Pastelería",
                fechaElaboracion: "2024-03-10",
                fechaVencimiento: "2024-09-10",
                proveedor: "Lácteos Colún",
                destacado: true
            },
            {
                codigo: "PST-003",
                lote: "LOT-PST-003",
                nombre: "Azúcar Flor Iansa 1kg",
                descripcion: "Azúcar finamente molida ideal para decoración de tortas, glasés y coberturas.",
                precio: 1800,
                stock: 200,
                stockCritico: 30,
                categoria: "Pastelería",
                fechaElaboracion: "2024-03-05",
                fechaVencimiento: "2024-09-05",
                proveedor: "Iansa",
                destacado: true
            },
            {
                codigo: "PST-004",
                lote: "LOT-PST-004",
                nombre: "Esencia de Vainilla Natural Gourmet 100ml",
                descripcion: "Extracto puro de vainilla natural concentrado para uso profesional.",
                precio: 8900,
                stock: 45,
                stockCritico: 8,
                categoria: "Pastelería",
                fechaElaboracion: "2024-01-20",
                fechaVencimiento: "2024-07-20",
                proveedor: "Esencias Premium"
            },
            {
                codigo: "PST-005",
                lote: "LOT-PST-005",
                nombre: "Chocolate Costa Cobertura Negra 70% 1kg",
                descripcion: "Chocolate de cobertura con 70% de cacao. Ideal para templar y repostería profesional.",
                precio: 12500,
                stock: 60,
                stockCritico: 10,
                categoria: "Pastelería",
                fechaElaboracion: "2024-03-12",
                fechaVencimiento: "2024-09-12",
                proveedor: "Chocolates Costa"
            },
            {
                codigo: "PST-006",
                lote: "LOT-PST-006",
                nombre: "Polvos de Hornear Calo 500g",
                descripcion: "Levadura química de acción doble para repostería. Garantiza un leudado perfecto.",
                precio: 3200,
                stock: 120,
                stockCritico: 25,
                categoria: "Pastelería",
                fechaElaboracion: "2024-02-28",
                fechaVencimiento: "2024-08-30",
                proveedor: "Calo"
            },
            {
                codigo: "PST-007",
                lote: "LOT-PST-007",
                nombre: "Crema Soprole para Batir 1L",
                descripcion: "Crema UHT con 35% de grasa. Ideal para chantilly y repostería.",
                precio: 4800,
                stock: 60,
                stockCritico: 12,
                categoria: "Pastelería",
                fechaElaboracion: "2024-03-14",
                fechaVencimiento: "2024-09-14",
                proveedor: "Soprole"
            },
            {
                codigo: "PST-008",
                lote: "LOT-PST-008",
                nombre: "Gelatina Sin Sabor en Polvo 1kg",
                descripcion: "Gelatina neutra en polvo de alta gelificación. 240 bloom.",
                precio: 15600,
                stock: 35,
                stockCritico: 6,
                categoria: "Pastelería",
                fechaElaboracion: "2024-02-08",
                fechaVencimiento: "2024-08-08",
                proveedor: "Gelificantes Pro"
            },
            {
                codigo: "PST-009",
                lote: "LOT-PST-009",
                nombre: "Almendras Fileteadas Importadas 500g",
                descripcion: "Almendras fileteadas y tostadas, perfectas para repostería.",
                precio: 9200,
                stock: 45,
                stockCritico: 8,
                categoria: "Pastelería",
                fechaElaboracion: "2024-03-07",
                fechaVencimiento: "2024-09-07",
                proveedor: "Frutos Secos Premium"
            },
            {
                codigo: "PST-010",
                lote: "LOT-PST-010",
                nombre: "Huevos en Polvo Pasteurizados 1kg",
                descripcion: "Huevo entero en polvo pasteurizado. Equivale a 80 huevos frescos.",
                precio: 18900,
                stock: 20,
                stockCritico: 3,
                categoria: "Pastelería",
                fechaElaboracion: "2024-02-16",
                fechaVencimiento: "2024-08-16",
                proveedor: "Ovoproductos SA"
            },
            {
                codigo: "PST-011",
                lote: "LOT-PST-011",
                nombre: "Fondant Blanco Listo 1kg",
                descripcion: "Pasta de azúcar lista para usar. Textura suave y maleable.",
                precio: 7800,
                stock: 30,
                stockCritico: 5,
                categoria: "Pastelería",
                fechaElaboracion: "2024-03-09",
                fechaVencimiento: "2024-09-09",
                proveedor: "Decoración Dulce"
            },
            {
                codigo: "PST-012",
                lote: "LOT-PST-012",
                nombre: "Cacao en Polvo Alcalinizado 500g",
                descripcion: "Cacao en polvo procesado. Color intenso y sabor profundo.",
                precio: 6700,
                stock: 75,
                stockCritico: 15,
                categoria: "Pastelería",
                fechaElaboracion: "2024-02-25",
                fechaVencimiento: "2024-08-25",
                proveedor: "Cacao Import"
            },
            {
                codigo: "PST-013",
                lote: "LOT-PST-013",
                nombre: "Bicarbonato de Sodio 1kg",
                descripcion: "Bicarbonato de sodio grado alimentario para repostería.",
                precio: 2400,
                stock: 90,
                stockCritico: 18,
                categoria: "Pastelería",
                fechaElaboracion: "2024-03-01",
                fechaVencimiento: "2024-09-01",
                proveedor: "Químicos Alimentarios",
                codigoQuimico: "NaHCO3"
            },
            {
                codigo: "PST-014",
                lote: "LOT-PST-014",
                nombre: "Mermelada de Frambuesa Sin Semillas 3kg",
                descripcion: "Mermelada profesional con 65% de fruta. Sin semillas.",
                precio: 14500,
                stock: 25,
                stockCritico: 4,
                categoria: "Pastelería",
                fechaElaboracion: "2024-02-28",
                fechaVencimiento: "2024-08-30",
                proveedor: "Conservas Artesanales"
            },
            // COCINA
            {
                codigo: "COC-001",
                lote: "LOT-COC-001",
                nombre: "Aceite de Maravilla Chef 5L",
                descripcion: "Aceite vegetal de maravilla, ideal para frituras y cocina en general.",
                precio: 12500,
                stock: 60,
                stockCritico: 10,
                categoria: "Cocina",
                fechaElaboracion: "2024-02-20",
                fechaVencimiento: "2025-02-20",
                proveedor: "Chef"
            },
            {
                codigo: "COC-002",
                lote: "LOT-COC-002",
                nombre: "Vinagre de Vino Tinto Gourmet 1L",
                descripcion: "Vinagre de vino tinto de calidad premium, especial para ensaladas y cocina.",
                precio: 2500,
                stock: 40,
                stockCritico: 6,
                categoria: "Cocina",
                fechaElaboracion: "2024-01-15",
                fechaVencimiento: "2025-01-15",
                proveedor: "Gourmet"
            },
            {
                codigo: "COC-003",
                lote: "LOT-COC-003",
                nombre: "Mostaza Dijon Gourmet 250g",
                descripcion: "Mostaza Dijon cremosa con sabor intenso, ideal para aderezos y salsas.",
                precio: 1800,
                stock: 70,
                stockCritico: 12,
                categoria: "Cocina",
                fechaElaboracion: "2024-03-01",
                fechaVencimiento: "2025-03-01",
                proveedor: "Gourmet"
            },
            {
                codigo: "COC-004",
                lote: "LOT-COC-004",
                nombre: "Mayonesa Hellmann's 1kg",
                descripcion: "Mayonesa clásica de textura cremosa y sabor equilibrado.",
                precio: 3200,
                stock: 55,
                stockCritico: 10,
                categoria: "Cocina",
                fechaElaboracion: "2024-02-10",
                fechaVencimiento: "2024-08-10",
                proveedor: "Unilever"
            },
            {
                codigo: "COC-005",
                lote: "LOT-COC-005",
                nombre: "Ketchup Carozzi 1kg",
                descripcion: "Ketchup clásico con tomates seleccionados.",
                precio: 2100,
                stock: 65,
                stockCritico: 10,
                categoria: "Cocina",
                fechaElaboracion: "2024-02-18",
                fechaVencimiento: "2025-02-18",
                proveedor: "Carozzi"
            },
            {
                codigo: "COC-006",
                lote: "LOT-COC-006",
                nombre: "Salsa de Soya Kikkoman 1L",
                descripcion: "Salsa de soya fermentada naturalmente, ideal para cocina asiática.",
                precio: 5900,
                stock: 30,
                stockCritico: 5,
                categoria: "Cocina",
                fechaElaboracion: "2024-01-25",
                fechaVencimiento: "2025-01-25",
                proveedor: "Kikkoman"
            },
            {
                codigo: "COC-007",
                lote: "LOT-COC-007",
                nombre: "Salsa de Ají Merkén Artesanal 250g",
                descripcion: "Salsa picante de ají cacho de cabra ahumado al estilo mapuche.",
                precio: 3500,
                stock: 20,
                stockCritico: 4,
                categoria: "Cocina",
                fechaElaboracion: "2024-03-05",
                fechaVencimiento: "2025-03-05",
                proveedor: "Sabores del Sur"
            },
            {
                codigo: "COC-008",
                lote: "LOT-COC-008",
                nombre: "Caldo Concentrado Maggi Pollo 1kg",
                descripcion: "Caldo concentrado en polvo sabor pollo, ideal para sopas y guisos.",
                precio: 7600,
                stock: 45,
                stockCritico: 8,
                categoria: "Cocina",
                fechaElaboracion: "2024-02-12",
                fechaVencimiento: "2025-02-12",
                proveedor: "Nestlé Chile"
            },
            {
                codigo: "COC-009",
                lote: "LOT-COC-009",
                nombre: "Curry en Polvo Hindú 250g",
                descripcion: "Mezcla de especias aromáticas estilo hindú, ideal para cocina internacional.",
                precio: 4800,
                stock: 25,
                stockCritico: 4,
                categoria: "Cocina",
                fechaElaboracion: "2024-01-30",
                fechaVencimiento: "2025-01-30",
                proveedor: "Especias del Mundo"
            },
            {
                codigo: "COC-010",
                lote: "LOT-COC-010",
                nombre: "Orégano Seco Chileno 500g",
                descripcion: "Orégano deshidratado de origen nacional, aroma intenso y sabor único.",
                precio: 3800,
                stock: 35,
                stockCritico: 6,
                categoria: "Cocina",
                fechaElaboracion: "2024-02-22",
                fechaVencimiento: "2025-02-22",
                proveedor: "Hierbas del Maule"
            },
            {
                codigo: "COC-011",
                lote: "LOT-COC-011",
                nombre: "Pimienta Negra Molida 250g",
                descripcion: "Pimienta negra molida de alta calidad, ideal para todo tipo de preparaciones.",
                precio: 4500,
                stock: 30,
                stockCritico: 5,
                categoria: "Cocina",
                fechaElaboracion: "2024-01-18",
                fechaVencimiento: "2025-01-18",
                proveedor: "Especias Premium"
            },
            {
                codigo: "COC-012",
                lote: "LOT-COC-012",
                nombre: "Sal de Mar Cahuil 1kg",
                descripcion: "Sal de mar artesanal cosechada en Cahuil, Región de O’Higgins.",
                precio: 2200,
                stock: 100,
                stockCritico: 20,
                categoria: "Cocina",
                fechaElaboracion: "2024-02-01",
                fechaVencimiento: "2026-02-01",
                proveedor: "Salinas de Cahuil"
            },
            // BEBIDAS Y LÁCTEOS
            {
                codigo: "BEB-001",
                lote: "LOT-BEB-001",
                nombre: "Leche Entera Colún 1L",
                descripcion: "Leche entera ultrapasteurizada, fortificada con vitaminas A y D.",
                precio: 1250,
                stock: 120,
                stockCritico: 20,
                categoria: "Bebidas y Lácteos",
                fechaElaboracion: "2024-03-01",
                fechaVencimiento: "2024-09-01",
                proveedor: "Colún"
            },
            {
                codigo: "BEB-002",
                lote: "LOT-BEB-002",
                nombre: "Yoghurt Soprole Natural 1kg",
                descripcion: "Yoghurt natural sin azúcar, ideal para preparaciones y consumo directo.",
                precio: 2800,
                stock: 60,
                stockCritico: 10,
                categoria: "Bebidas y Lácteos",
                fechaElaboracion: "2024-03-10",
                fechaVencimiento: "2024-06-10",
                proveedor: "Soprole"
            },
            {
                codigo: "BEB-003",
                lote: "LOT-BEB-003",
                nombre: "Queso Gouda Quillayes 500g",
                descripcion: "Queso gouda de maduración media, textura semidura y sabor suave.",
                precio: 4800,
                stock: 40,
                stockCritico: 8,
                categoria: "Bebidas y Lácteos",
                fechaElaboracion: "2024-02-20",
                fechaVencimiento: "2024-08-20",
                proveedor: "Quillayes"
            },
            {
                codigo: "BEB-004",
                lote: "LOT-BEB-004",
                nombre: "Crema para Café Loncoleche 200ml",
                descripcion: "Crema láctea líquida, especial para café y repostería.",
                precio: 950,
                stock: 90,
                stockCritico: 15,
                categoria: "Bebidas y Lácteos",
                fechaElaboracion: "2024-03-12",
                fechaVencimiento: "2024-06-12",
                proveedor: "Loncoleche"
            },
            {
                codigo: "BEB-005",
                lote: "LOT-BEB-005",
                nombre: "Jugo Watts Naranja 1L",
                descripcion: "Jugo de naranja pasteurizado, sin azúcar añadida.",
                precio: 1800,
                stock: 100,
                stockCritico: 18,
                categoria: "Bebidas y Lácteos",
                fechaElaboracion: "2024-03-05",
                fechaVencimiento: "2024-07-05",
                proveedor: "Watts"
            },
            {
                codigo: "BEB-006",
                lote: "LOT-BEB-006",
                nombre: "Agua Mineral Cachantún Sin Gas 1.5L",
                descripcion: "Agua mineral natural, baja en sodio, en envase PET.",
                precio: 850,
                stock: 200,
                stockCritico: 30,
                categoria: "Bebidas y Lácteos",
                fechaElaboracion: "2024-02-28",
                fechaVencimiento: "2025-02-28",
                proveedor: "Cachantún"
            },
            {
                codigo: "BEB-007",
                lote: "LOT-BEB-007",
                nombre: "Bebida Coca-Cola 1.5L",
                descripcion: "Bebida gaseosa sabor cola, en formato retornable.",
                precio: 1600,
                stock: 150,
                stockCritico: 25,
                categoria: "Bebidas y Lácteos",
                fechaElaboracion: "2024-03-08",
                fechaVencimiento: "2024-09-08",
                proveedor: "Coca-Cola Chile"
            },
            {
                codigo: "BEB-008",
                lote: "LOT-BEB-008",
                nombre: "Bebida Sprite Zero 1.5L",
                descripcion: "Bebida gaseosa sin azúcar, sabor lima-limón.",
                precio: 1550,
                stock: 140,
                stockCritico: 25,
                categoria: "Bebidas y Lácteos",
                fechaElaboracion: "2024-03-09",
                fechaVencimiento: "2024-09-09",
                proveedor: "Coca-Cola Chile"
            },
            {
                codigo: "BEB-009",
                lote: "LOT-BEB-009",
                nombre: "Cerveza Cristal 1L",
                descripcion: "Cerveza lager chilena, refrescante y balanceada.",
                precio: 1350,
                stock: 180,
                stockCritico: 30,
                categoria: "Bebidas y Lácteos",
                fechaElaboracion: "2024-02-18",
                fechaVencimiento: "2024-08-18",
                proveedor: "CCU"
            },
            {
                codigo: "BEB-010",
                lote: "LOT-BEB-010",
                nombre: "Vino Tinto Reservado Concha y Toro 750ml",
                descripcion: "Vino tinto reserva especial, cepa Cabernet Sauvignon.",
                precio: 4200,
                stock: 75,
                stockCritico: 12,
                categoria: "Bebidas y Lácteos",
                fechaElaboracion: "2022-03-01",
                fechaVencimiento: "2030-03-01",
                proveedor: "Concha y Toro"
            },
            // LIMPIEZA
            {
                codigo: "QUI-001",
                lote: "LOT-QUI-001",
                nombre: "Desengrasante Industrial Concentrado 5L",
                descripcion: "Desengrasante alcalino concentrado para limpieza de cocinas industriales. Diluir 1:10.",
                precio: 18500,
                stock: 30,
                stockCritico: 5,
                categoria: "Químicos",
                fechaElaboracion: "2024-02-15",
                fechaVencimiento: "2024-09-03",
                proveedor: "Químicos Industriales Pro",
                codigoQuimico: "Q-ALC-01"
            },
            {
                codigo: "QUI-002",
                lote: "LOT-QUI-002",
                nombre: "Sanitizante Alimentario sin Enjuague 1L",
                descripcion: "Sanitizante a base de amonio cuaternario. Apto para contacto indirecto con alimentos.",
                precio: 6800,
                stock: 85,
                stockCritico: 15,
                categoria: "Químicos",
                fechaElaboracion: "2024-03-01",
                fechaVencimiento: "2024-09-11",
                proveedor: "Higiene Profesional",
                codigoQuimico: "Q-AMON-04"
            },
            {
                codigo: "QUI-003",
                lote: "LOT-QUI-003",
                nombre: "Detergente Lavavajillas Manual 5L",
                descripcion: "Detergente concentrado para lavado manual de vajilla. pH neutro, amigable con la piel.",
                precio: 8900,
                stock: 50,
                stockCritico: 8,
                categoria: "Químicos",
                fechaElaboracion: "2024-03-05",
                fechaVencimiento: "2024-08-28",
                proveedor: "Detergentes Eco",
                codigoQuimico: "Q-SURF-07"
            },
            {
                codigo: "QUI-004",
                lote: "LOT-QUI-004",
                nombre: "Cloro Gel Espeso 2L",
                descripcion: "Hipoclorito de sodio en gel para desinfección de superficies. Mayor adherencia y efectividad.",
                precio: 4200,
                stock: 70,
                stockCritico: 12,
                categoria: "Químicos",
                fechaElaboracion: "2024-03-02",
                fechaVencimiento: "2024-09-06",
                proveedor: "Desinfectantes Plus",
                codigoQuimico: "CAS 7681-52-9"
            },
            {
                codigo: "QUI-005",
                lote: "LOT-QUI-005",
                nombre: "Limpiador Multiusos Concentrado 1L",
                descripcion: "Limpiador enzimático multiuso. Biodegradable y seguro para uso alimentario.",
                precio: 5500,
                stock: 95,
                stockCritico: 18,
                categoria: "Químicos",
                fechaElaboracion: "2024-02-20",
                fechaVencimiento: "2024-09-02",
                proveedor: "EcoLimp Solutions",
                codigoQuimico: "Q-ENZ-02"
            },
            {
                codigo: "QUI-006",
                lote: "LOT-QUI-006",
                nombre: "Alcohol Etílico 70% Antiséptico 5L",
                descripcion: "Alcohol etílico 70% para desinfección de superficies y equipos. Uso profesional en cocinas.",
                precio: 12500,
                stock: 40,
                stockCritico: 8,
                categoria: "Químicos",
                fechaElaboracion: "2024-02-28",
                fechaVencimiento: "2024-09-10",
                proveedor: "Alcoholes Industriales",
                codigoQuimico: "CAS 64-17-5"
            },
            {
                codigo: "QUI-007",
                lote: "LOT-QUI-007",
                nombre: "Desinfectante Cuaternario de Amonio 1L",
                descripcion: "Desinfectante no corrosivo a base de sales cuaternarias. Amplio espectro antimicrobiano.",
                precio: 7800,
                stock: 35,
                stockCritico: 6,
                categoria: "Químicos",
                fechaElaboracion: "2024-03-03",
                fechaVencimiento: "2024-08-28",
                proveedor: "Desinfectantes Pro",
                codigoQuimico: "Q-AMON-05"
            },
            {
                codigo: "QUI-008",
                lote: "LOT-QUI-008",
                nombre: "Limpiador de Hornos Profesional 750ml",
                descripcion: "Desengrasante alcalino especial para hornos. Remueve grasa carbonizada sin dañar superficies.",
                precio: 9200,
                stock: 25,
                stockCritico: 4,
                categoria: "Químicos",
                fechaElaboracion: "2024-03-01",
                fechaVencimiento: "2024-09-02",
                proveedor: "Limpieza Industrial",
                codigoQuimico: "Q-ALC-03"
            },
            {
                codigo: "QUI-009",
                lote: "LOT-QUI-009",
                nombre: "Jabón Líquido Antibacterial 4L",
                descripcion: "Jabón líquido con agentes antibacteriales para lavado de manos en cocinas comerciales.",
                precio: 11800,
                stock: 50,
                stockCritico: 10,
                categoria: "Químicos",
                fechaElaboracion: "2024-02-22",
                fechaVencimiento: "2024-09-07",
                proveedor: "Higiene Personal Pro",
                codigoQuimico: "Q-ANTIB-09"
            },
            {
                codigo: "QUI-010",
                lote: "LOT-QUI-010",
                nombre: "Descalcificador para Equipos 2L",
                descripcion: "Ácido cítrico concentrado para descalcificar máquinas de café, hervidores y equipos de vapor.",
                precio: 8500,
                stock: 30,
                stockCritico: 5,
                categoria: "Químicos",
                fechaElaboracion: "2024-03-04",
                fechaVencimiento: "2024-08-19",
                proveedor: "Mantenimiento Equipos",
                codigoQuimico: "CAS 77-92-9"
            },
            // EQUIPAMIENTO
            {
                codigo: "EQU-001",
                lote: "LOT-EQU-001",
                nombre: "Molde para Pan de Molde Antiadherente",
                descripcion: "Molde rectangular 30x12x8cm con recubrimiento antiadherente. Acero aluminizado de alta calidad.",
                precio: 14500,
                stock: 25,
                stockCritico: 3,
                categoria: "Equipamiento",
                fechaElaboracion: "2024-01-15",
                fechaVencimiento: "2030-01-15",
                proveedor: "Utensilios Pro"
            },
            {
                codigo: "EQU-002",
                lote: "LOT-EQU-002",
                nombre: "Batidor Globo Acero Inoxidable 30cm",
                descripcion: "Batidor de varillas profesional. Mango ergonómico y alambre de acero inoxidable 18/10.",
                precio: 8900,
                stock: 35,
                stockCritico: 5,
                categoria: "Equipamiento",
                fechaElaboracion: "2024-02-10",
                fechaVencimiento: "2034-02-10",
                proveedor: "Herramientas de Cocina"
            },
            {
                codigo: "EQU-003",
                lote: "LOT-EQU-003",
                nombre: "Termómetro Digital para Horno",
                descripcion: "Termómetro digital con sonda. Rango -50°C a +300°C. Pantalla LCD grande y cable de 1 metro.",
                precio: 22500,
                stock: 15,
                stockCritico: 2,
                categoria: "Equipamiento",
                fechaElaboracion: "2024-01-20",
                fechaVencimiento: "2029-01-20",
                proveedor: "Instrumentos de Medición"
            },
            {
                codigo: "EQU-004",
                lote: "LOT-EQU-004",
                nombre: "Báscula Digital de Precisión 5kg",
                descripcion: "Báscula digital con precisión de 1g. Plataforma de acero inoxidable 21x16cm. Función tara.",
                precio: 45600,
                stock: 15,
                stockCritico: 2,
                categoria: "Equipamiento",
                fechaElaboracion: "2024-02-15",
                fechaVencimiento: "2029-02-15",
                proveedor: "Balanzas Profesionales"
            },
            {
                codigo: "EQU-005",
                lote: "LOT-EQU-005",
                nombre: "Espátula de Silicona Set 3 Tamaños",
                descripcion: "Set de espátulas de silicona alimentaria resistente hasta 250°C. Mango de madera.",
                precio: 12800,
                stock: 40,
                stockCritico: 8,
                categoria: "Equipamiento",
                fechaElaboracion: "2024-02-28",
                fechaVencimiento: "2034-02-28",
                proveedor: "Utensilios Silicona"
            },
            {
                codigo: "EQU-006",
                lote: "LOT-EQU-006",
                nombre: "Rallador Microplane Acero Inoxidable",
                descripcion: "Rallador profesional de acero inoxidable. Cuchillas ultra afiladas para cítricos, queso y especias.",
                precio: 18900,
                stock: 20,
                stockCritico: 3,
                categoria: "Equipamiento",
                fechaElaboracion: "2024-01-25",
                fechaVencimiento: "2034-01-25",
                proveedor: "Herramientas Premium"
            },
            {
                codigo: "EQU-007",
                lote: "LOT-EQU-007",
                nombre: "Mandolina Profesional con Protector",
                descripcion: "Mandolina de acero inoxidable con 5 cuchillas intercambiables. Incluye protector de manos.",
                precio: 35700,
                stock: 12,
                stockCritico: 2,
                categoria: "Equipamiento",
                fechaElaboracion: "2024-01-10",
                fechaVencimiento: "2034-01-10",
                proveedor: "Cortadores Pro"
            },
            {
                codigo: "EQU-008",
                lote: "LOT-EQU-008",
                nombre: "Rodillo de Amasado Francés 40cm",
                descripcion: "Rodillo de madera de haya sin mangos. Diseño francés tradicional para masas delicadas.",
                precio: 16500,
                stock: 25,
                stockCritico: 4,
                categoria: "Equipamiento",
                fechaElaboracion: "2024-02-05",
                fechaVencimiento: "2034-02-05",
                proveedor: "Maderas Gastronómicas"
            },
            {
                codigo: "EQU-009",
                lote: "LOT-EQU-009",
                nombre: "Boquillas para Manga Pastelera Set 24",
                descripcion: "Set completo de 24 boquillas de acero inoxidable. Incluye boquillas lisas, rizadas y especiales.",
                precio: 22400,
                stock: 18,
                stockCritico: 3,
                categoria: "Equipamiento",
                fechaElaboracion: "2024-02-20",
                fechaVencimiento: "2034-02-20",
                proveedor: "Decoración Profesional"
            },

            // PRODUCTOS ESPECIALES/PROMOCIONALES
            {
                codigo: "ESP-001",
                lote: "LOT-ESP-001",
                nombre: "Kit Básico Panadería Casera",
                descripcion: "Kit completo para iniciarse en panadería: harina, levadura, sal, molde y recetario básico.",
                precio: 18900,
                stock: 20,
                stockCritico: 3,
                categoria: "Kits",
                fechaElaboracion: "2024-03-01",
                fechaVencimiento: "2024-09-01",
                proveedor: "Kits Especializados"
            },
            {
                codigo: "ESP-002",
                lote: "LOT-ESP-002",
                nombre: "Muestra Gratuita - Aditivo Mejorante",
                descripcion: "Muestra gratuita de 100g de aditivo mejorante para pan. Mejora textura, volumen y conservación.",
                precio: 0,
                stock: 100,
                stockCritico: 20,
                categoria: "Muestras",
                fechaElaboracion: "2024-03-10",
                fechaVencimiento: "2024-09-10",
                proveedor: "Aditivos Panificación",
                codigoQuimico: "E-MALT-01"
            },
            {
                codigo: "ESP-003",
                lote: "LOT-ESP-003",
                nombre: "Colorante Alimentario Set 6 Colores",
                descripcion: "Set de 6 colorantes en gel concentrados: rojo, azul, amarillo, verde, naranja y rosa. 30ml cada uno.",
                precio: 12800,
                stock: 40,
                stockCritico: 6,
                categoria: "Pastelería",
                fechaElaboracion: "2024-02-25",
                fechaVencimiento: "2025-02-25",
                proveedor: "Colorantes Profesionales",
                codigoQuimico: "E-COL-MIX"
            },

            // INGREDIENTES ESPECIALIZADOS
            {
                codigo: "ING-001",
                lote: "LOT-ING-001",
                nombre: "Lecitina de Soja en Polvo 500g",
                descripcion: "Emulsionante natural derivado de la soja. Mejora textura en chocolates, panes y productos horneados.",
                precio: 8900,
                stock: 30,
                stockCritico: 5,
                categoria: "Ingredientes",
                fechaElaboracion: "2024-02-10",
                fechaVencimiento: "2025-02-10",
                proveedor: "Aditivos Naturales",
                codigoQuimico: "E322"
            },
            {
                codigo: "ING-002",
                lote: "LOT-ING-002",
                nombre: "Ácido Cítrico Alimentario 1kg",
                descripcion: "Ácido cítrico grado alimentario. Conservante natural, regulador de acidez y antioxidante.",
                precio: 5600,
                stock: 45,
                stockCritico: 8,
                categoria: "Ingredientes",
                fechaElaboracion: "2024-03-04",
                fechaVencimiento: "2026-03-04",
                proveedor: "Conservantes Naturales",
                codigoQuimico: "E330"
            },
            {
                codigo: "ING-003",
                lote: "LOT-ING-003",
                nombre: "Goma Xantana 250g",
                descripcion: "Espesante y estabilizante natural. Ideal para salsas, helados y productos sin gluten.",
                precio: 15800,
                stock: 20,
                stockCritico: 3,
                categoria: "Ingredientes",
                fechaElaboracion: "2024-02-12",
                fechaVencimiento: "2026-02-12",
                proveedor: "Hidrocoloides Pro",
                codigoQuimico: "E415"
            },
            {
                codigo: "ING-004",
                lote: "LOT-ING-004",
                nombre: "Maltodextrina 1kg",
                descripcion: "Carbohidrato complejo de rápida absorción. Para encapsular aceites y crear polvos aromáticos.",
                precio: 6800,
                stock: 35,
                stockCritico: 6,
                categoria: "Ingredientes",
                fechaElaboracion: "2024-02-26",
                fechaVencimiento: "2026-02-26",
                proveedor: "Carbohidratos Funcionales",
                codigoQuimico: "MALT-DEX"
            },
            {
                codigo: "ING-005",
                lote: "LOT-ING-005",
                nombre: "Proteína de Suero Concentrada 1kg",
                descripcion: "Proteína whey concentrada 80%. Para enriquecer productos horneados y batidos nutritivos.",
                precio: 24500,
                stock: 25,
                stockCritico: 4,
                categoria: "Ingredientes",
                fechaElaboracion: "2024-03-13",
                fechaVencimiento: "2025-03-13",
                proveedor: "Proteínas Deportivas"
            },
            // ENVASES Y EMBALAJES
            {
                codigo: "ENV-001",
                lote: "LOT-ENV-001",
                nombre: "Cajas para Torta Blancas 30x30x15cm",
                descripcion: "Cajas de cartón alimentario blanco para tortas. Base reforzada y ventana transparente. Pack x 50 unidades.",
                precio: 18500,
                stock: 40,
                stockCritico: 8,
                categoria: "Envases",
                fechaElaboracion: "2024-03-08",
                fechaVencimiento: "2027-03-08",
                proveedor: "Embalajes Dulces"
            },
            {
                codigo: "ENV-002",
                lote: "LOT-ENV-002",
                nombre: "Bolsas Kraft con Ventana 500g",
                descripcion: "Bolsas de papel kraft con ventana transparente. Ideales para productos de panadería. Pack x 100 unidades.",
                precio: 12400,
                stock: 60,
                stockCritico: 12,
                categoria: "Envases",
                fechaElaboracion: "2024-02-28",
                fechaVencimiento: "2027-02-28",
                proveedor: "Papeles Ecológicos"
            },
            {
                codigo: "ENV-003",
                lote: "LOT-ENV-003",
                nombre: "Recipientes Plásticos con Tapa 1L",
                descripcion: "Contenedores de polipropileno con tapa hermética. Aptos para microondas y lavavajillas. Pack x 25.",
                precio: 22800,
                stock: 30,
                stockCritico: 5,
                categoria: "Envases",
                fechaElaboracion: "2024-03-06",
                fechaVencimiento: "2029-03-06",
                proveedor: "Plásticos Alimentarios",
                codigoQuimico: "PP-FOOD"
            },
            // PRODUCTOS DE TEMPORADA/ESTACIONALES
            {
                codigo: "TMP-001",
                lote: "LOT-TMP-001",
                nombre: "Castañas Confitadas en Almíbar 2kg",
                descripcion: "Castañas europeas confitadas en almíbar. Producto de temporada otoño-invierno para repostería fina.",
                precio: 34500,
                stock: 15,
                stockCritico: 2,
                categoria: "Temporada",
                fechaElaboracion: "2024-02-10",
                fechaVencimiento: "2025-02-10",
                proveedor: "Conservas Estacionales"
            },
            {
                codigo: "TMP-002",
                lote: "LOT-TMP-002",
                nombre: "Puré de Calabaza Natural 1kg",
                descripcion: "Puré de calabaza butternut natural sin aditivos. Ideal para tartas, panes y postres otoñales.",
                precio: 7800,
                stock: 25,
                stockCritico: 4,
                categoria: "Temporada",
                fechaElaboracion: "2024-03-15",
                fechaVencimiento: "2024-09-15",
                proveedor: "Purés Naturales"
            }
];
const clientesBase = [
  {
    id: "192332011",
    nombre: "Carla",
    apellidos: "Prado",
    correo: "cprado@gmail.com",
    fechaNacimiento: "1995-04-11",
    tipoUsuario: "Administrador",
    region: "Región Metropolitana de Santiago",
    comuna: "Pudahuel",
    direccion: "Av. Siempre Viva 123",
    clave: "1234"
  }
];

/* Inicialización */
function inicializarDatos() {
  if (!localStorage.getItem(LS_KEYS.productos) || localStorage.getItem(LS_KEYS.productos) === "[]") {
    localStorage.setItem(LS_KEYS.productos, JSON.stringify(productosBase));
    localStorage.setItem(LS_KEYS.productosInicializados, "true");
  }
  if (!localStorage.getItem(LS_KEYS.clientesInicializados)) {
    localStorage.setItem(LS_KEYS.clientes, JSON.stringify(clientesBase));
    localStorage.setItem(LS_KEYS.clientesInicializados, "true");
  }
}
inicializarDatos();

/* ================
   DATA GET/SET
================== */

function obtenerProductos() {
  return JSON.parse(localStorage.getItem(LS_KEYS.productos)) || [];
}
function guardarProductos(productos) {
  localStorage.setItem(LS_KEYS.productos, JSON.stringify(productos));
}

function obtenerClientes() {
  // Unifica email/correo en salida, acepta cualquiera para compatibilidad
  let lista = JSON.parse(localStorage.getItem(LS_KEYS.clientes)) || [];
  return lista.map(c => ({
    ...c,
    correo: c.correo || c.email || "",
    clave: c.clave || c.password || ""
  }));
}
function guardarClientes(clientes) {
  // Siempre guardar usando la clave "correo"
  clientes = clientes.map(c => ({
    ...c,
    correo: c.correo || c.email || "",
    clave: c.clave || c.password || ""
  }));
  localStorage.setItem(LS_KEYS.clientes, JSON.stringify(clientes));
}

/* ================
   REGIONES Y CATEGORIAS
================== */
const regionesYComunas = {
    "Región de Arica y Parinacota": ["Arica", "Camarones", "General Lagos", "Putre"],
    "Región de Tarapacá": ["Iquique", "Alto Hospicio", "Camiña", "Colchane", "Huara", "Pica"],
    "Región de Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollague", "San Pedro de Atacama", "Tocopilla"],
    "Región de Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
    "Región de Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
    "Región de Valparaíso": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
    "Región Metropolitana de Santiago": ["Cerrillos","Cerro Navia","Conchalí","El Bosque","Estación Central","Huechuraba","Independencia","La Cisterna","La Florida","La Granja","La Pintana","La Reina","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipú","Ñuñoa","Pedro Aguirre Cerda","Peñalolén","Providencia","Pudahuel","Quilicura","Quinta Normal","Recoleta","Renca","San Joaquín","San Miguel","San Ramón","Vitacura","Puente Alto","Pirque","San José de Maipo","Colina","Lampa","Tiltil","San Bernardo","Buin","Calera de Tango","Paine","Melipilla","Alhué","Curacaví","María Pinto","San Pedro","Talagante","El Monte","Isla de Maipo","Padre Hurtado","Peñaflor"],
    "Región de O'Higgins": ["Rancagua","Codegua","Coinco","Coltauco","Doñihue","Graneros","Las Cabras","Machalí","Malloa","Mostazal","Olivar","Peumo","Pichidegua","Quinta de Tilcoco","Rengo","Requínoa","San Vicente","La Estrella","Litueche","Marchihue","Navidad","Pichilemu","San Fernando","Chimbarongo","Lolol","Nancagua","Palmilla","Peralillo","Placilla","Pumanque","Santa Cruz"],
    "Región del Maule": ["Talca","Constitución","Curepto","Empedrado","Maule","Pelarco","Pencahue","Río Claro","San Clemente","San Rafael","Cauquenes","Chanco","Pelluhue","Curicó","Hualañé","Licantén","Molina","Rauco","Romeral","Sagrada Familia","Teno","Vichuquén","Linares","Colbún","Longaví","Parral","Retiro","San Javier","Villa Alegre","Yerbas Buenas"],
    "Región de Ñuble": ["Chillán","Chillán Viejo","Bulnes","Cobquecura","Coelemu","Coihueco","Chillán Viejo","El Carmen","Ninhue","Ñiquén","Pemuco","Pinto","Quillón","Quirihue","Ranquil","San Carlos","San Fabián","San Ignacio","Trehuaco","Yungay"],
    "Región del Biobío": ["Concepción","Coronel","Chiguayante","Florida","Hualpén","Hualqui","Lota","Penco","San Pedro de la Paz","Santa Juana","Talcahuano","Tomé","Arauco","Cabrero","Lebu","Los Álamos","Cañete","Contulmo","Curanilahue","Laja","Los Ángeles","Antuco","Cabrero","Mulchén","Nacimiento","Negrete","Quilaco","Quilleco","San Rosendo","Santa Bárbara","Tucapel","Yumbel","Alto Biobío"],
    "Región de La Araucanía": ["Temuco","Carahue","Cholchol","Cunco","Curarrehue","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Melipeuco","Nueva Imperial","Padre Las Casas","Perquenco","Pitrufquén","Pucón","Saavedra","Teodoro Schmidt","Toltén","Villarrica","Angol","Collipulli","Curacautín","Ercilla","Lonquimay","Los Sauces","Lumaco","Purén","Renaico","Traiguén","Victoria"],
    "Región de Los Ríos": ["Valdivia","Corral","Lanco","Los Lagos","Máfil","Mariquina","Paillaco","Panguipulli","La Unión","Futrono","Lago Ranco","Río Bueno"],
    "Región de Los Lagos": ["Puerto Montt","Calbuco","Cochamó","Fresia","Frutillar","Los Muermos","Llanquihue","Puerto Varas","Castro","Ancud","Chonchi","Curaco de Vélez","Dalcahue","Puqueldón","Queilén","Quellón","Quemchi","Quinchao","Osorno","Puerto Octay","Puyehue","Río Negro","San Pablo","Chaitén","Futaleufú","Hualaihué","Palena"],
    "Región de Aysén": ["Coyhaique","Lago Verde","Aysén","Cisnes","Guaitecas","Cochrane","O'Higgins","Tortel","Chile Chico","Río Ibáñez"],
    "Región de Magallanes": ["Punta Arenas","Laguna Blanca","Río Verde","San Gregorio","Porvenir","Primavera","Timaukel","Natales","Torres del Paine","Cabo de Hornos","Antártica Chilena"]
};
const categoriasProductos = [
  "Pastelería", "Cocina", "Químicos", "Equipamiento", "Kits", 
  "Muestras", "Ingredientes", "Envases", "Temporada"
];

function llenarRegionesYComunas(regionSelectId, comunaSelectId) {
  const regionSelect = document.getElementById(regionSelectId);
  const comunaSelect = document.getElementById(comunaSelectId);
  if (!regionSelect || !comunaSelect) return;
  regionSelect.innerHTML = '<option value="">Seleccione la región</option>';
  Object.keys(regionesYComunas).forEach(region => {
    const opt = document.createElement("option");
    opt.value = region;
    opt.textContent = region;
    regionSelect.appendChild(opt);
  });
  regionSelect.addEventListener("change", function () {
    comunaSelect.innerHTML = '<option value="">Seleccione la comuna</option>';
    (regionesYComunas[this.value] || []).forEach(comuna => {
      const opt = document.createElement("option");
      opt.value = comuna;
      opt.textContent = comuna;
      comunaSelect.appendChild(opt);
    });
  });
}

function llenarCategorias(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return;
  select.innerHTML = '<option value="">Seleccione la categoría</option>';
  categoriasProductos.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}

/* ================
   TABLA RENDER
================== */
function renderClientes() {
  const tbody = document.getElementById("clientes-tbody");
  if (!tbody) return;
  const clientes = obtenerClientes();
  tbody.innerHTML = "";
  if (clientes.length === 0) {
    tbody.innerHTML = '<tr><td colspan="11" style="text-align:center;">No hay clientes registrados</td></tr>';
    return;
  }
  clientes.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${c.id}</td>
      <td>${c.nombre}</td>
      <td>${c.apellidos}</td>
      <td>${c.correo}</td>
      <td>${c.fechaNacimiento || ""}</td>
      <td>${c.tipoUsuario || ""}</td>
      <td>${c.region || ""}</td>
      <td>${c.comuna || ""}</td>
      <td>${c.direccion || ""}</td>
      <td>${c.clave ? '🔒' : ''}</td>
      <td>
        <a href="editar-cliente.html?run=${c.id}"><button>Editar</button></a>
        <button onclick="confirmarEliminacion('cliente','${c.id}')">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function renderProductos() {
  const tbody = document.getElementById("productos-tbody");
  if (!tbody) return;
  const productos = obtenerProductos();
  tbody.innerHTML = "";
  if (productos.length === 0) {
    tbody.innerHTML = '<tr><td colspan="13" style="text-align:center;">No hay productos registrados</td></tr>';
    return;
  }
  productos.forEach(p => {
    const stockClass = p.stockCritico && p.stock <= p.stockCritico ? 'stock-critico' : '';
    const precioFormateado = new Intl.NumberFormat('es-CL', {
      style: 'currency', currency: 'CLP'
    }).format(p.precio);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.codigo}</td>
      <td>${p.lote}</td>
      <td>${p.nombre}</td>
      <td>${p.categoria}</td>
      <td>${p.descripcion || "Sin descripción"}</td>
      <td class="${stockClass}">${p.stock}</td>
      <td>${typeof p.stockCritico !== 'undefined' ? p.stockCritico : '—'}</td>
      <td>${p.fechaElaboracion || "—"}</td> 
      <td>${p.fechaVencimiento || "—"}</td>
      <td>${precioFormateado}</td>
      <td>${p.proveedor || ""}</td>
      <td>${p.codigoQuimico || "—"}</td>
      <td>
        <a href="editar-producto.html?codigo=${p.codigo}"><button>Editar</button></a>
        <button onclick="confirmarEliminacion('producto','${p.codigo}')">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  verificarStockCritico();
}

/* ================
   STOCK CRITICO
================== */
function verificarStockCritico() {
  const productos = obtenerProductos();
  const criticos = productos.filter(p => p.stockCritico && p.stock <= p.stockCritico);
  if (criticos.length > 0) {
    console.warn("ALERTA: Hay productos con stock crítico:", criticos.map(p => p.nombre).join(", "));
  }
}

/* ================
   ELIMINACIÓN
================== */
function confirmarEliminacion(tipo, id) {
  if (!confirm(`¿Seguro que deseas eliminar este ${tipo}?`)) return;
  if (tipo === "cliente") {
    const nuevos = obtenerClientes().filter(c => c.id !== id);
    guardarClientes(nuevos);
    renderClientes();
  } else if (tipo === "producto") {
    const nuevos = obtenerProductos().filter(p => p.codigo !== id);
    guardarProductos(nuevos);
    renderProductos();
  }
  alert(`${tipo} eliminado correctamente.`);
}

/* ================
   VALIDADORES
================== */
function validarCorreo(email) {
  return /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(email);
}
function validarRun(run) {
  return /^[0-9]{7,8}[0-9Kk]{1}$/.test(run);
}
function validarLote(lote) {
  return /^[A-Z0-9-]{3,}$/.test(lote);
}
function validarCodigoProducto(codigo) {
  return codigo.length >= 3;
}
function validarPrecio(precio) {
  return precio >= 0;
}
function validarStock(stock) {
  return Number.isInteger(Number(stock)) && stock >= 0;
}
function validarStockCritico(stockCritico) {
  return stockCritico === "" || (Number.isInteger(Number(stockCritico)) && stockCritico >= 0);
}

/* ================
   AUTO RENDER AL CARGAR
================== */
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    if (document.getElementById("productos-tbody")) renderProductos();
    if (document.getElementById("clientes-tbody")) renderClientes();
  }, 80);
});

/* ================
   FUNCIONES GLOBALES
================== */
window.obtenerClientes = obtenerClientes;
window.guardarClientes = guardarClientes;
window.obtenerProductos = obtenerProductos;
window.guardarProductos = guardarProductos;
window.llenarRegionesYComunas = llenarRegionesYComunas;
window.llenarCategorias = llenarCategorias;
window.renderProductos = renderProductos;
window.renderClientes = renderClientes;
window.validarCorreo = validarCorreo;
window.validarRun = validarRun;
window.validarLote = validarLote;
window.validarCodigoProducto = validarCodigoProducto;
window.validarPrecio = validarPrecio;
window.validarStock = validarStock;
window.validarStockCritico = validarStockCritico;
window.confirmarEliminacion = confirmarEliminacion;
window.limpiarDatos = function () {
  localStorage.clear();
  alert("Datos limpiados. Recargando...");
  location.reload();
};

/* ================
   EXPORTS (para pruebas unitarias)
================== */
if (typeof module !== "undefined") module.exports = {
  obtenerProductos, guardarProductos, obtenerClientes, guardarClientes
};