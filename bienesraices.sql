-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 03-05-2025 a las 01:48:59
-- Versión del servidor: 8.0.33
-- Versión de PHP: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bienesraices`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog`
--

CREATE TABLE `blog` (
  `blogId` int NOT NULL,
  `titulo` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `imagen` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `autor` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `blog_url` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `creado` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `blog`
--

INSERT INTO `blog` (`blogId`, `titulo`, `subtitulo`, `imagen`, `autor`, `blog_url`, `creado`) VALUES
(10, 'Terraza en el techo de tu casa', 'Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero', 'fqrclryemwlfew6d7kij', 'Sandra Hernandez', 'https://decorarmicasa.com/', '2025-04-25 15:25:06'),
(11, '10 Tips para Tu Terraza soñada', 'Consejos para construir una terraza en el techo de tu casa con los mejores materiales y ahorrando dinero', 'yamxqsbjhsoybnfrdiqg', 'Martina Elizabeth', 'https://decorarmicasa.com/', '2025-04-25 15:26:28'),
(12, 'Guia para la decoracion de tu hogar', 'Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio', 'idszb3bidtoym7pww9ld', 'Jorge Albarinio', 'https://decorarmicasa.com/', '2025-04-25 15:27:32'),
(13, '10 Tips para tu Ambiente Soñada', 'Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio', 'v6m8udjf9hqlpgkf03fj', 'Jorge Albarinio', 'https://decorarmicasa.com/', '2025-04-25 15:28:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propiedades`
--

CREATE TABLE `propiedades` (
  `Id` int NOT NULL,
  `titulo` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `imagen` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `descripcion` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `alta` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `baja` date DEFAULT NULL,
  `disponible` tinyint(1) NOT NULL DEFAULT '1',
  `vendedorId` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `propiedades`
--

INSERT INTO `propiedades` (`Id`, `titulo`, `subtitulo`, `imagen`, `precio`, `descripcion`, `alta`, `baja`, `disponible`, `vendedorId`) VALUES
(14, 'Casa de Lujo en el Lago', 'Casa de lujo en el lago con execelente vista, acabados de lujo, 4 habitaciones, 4 baños, 2 plantas, 2 cocheras, 300 m2', 'zqvo420uubswu06ubod2', 300000.00, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra neque vitae augue cursus, non feugiat mauris vestibulum. Suspendisse malesuada mauris accumsan diam venenatis, non dignissim arcu pulvinar. Sed eget quam molestie, posuere elit a, tincidunt nibh. Vestibulum vitae sem tortor. Nam auctor risus ut magna maximus efficitur. In at.\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      ', '2025-04-24 21:54:57', NULL, 1, 3),
(15, 'Mansion con Pileta', 'Mansion con pileta y parque, 5 habitaciones, 5 baños, 3 plantas, 3 cocheras, 500 m2', 'c2win9iluwgjw9kbro5z', 500000.00, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra neque vitae augue cursus, non feugiat mauris vestibulum. Suspendisse malesuada mauris accumsan diam venenatis, non dignissim arcu pulvinar. Sed eget quam molestie, posuere elit a, tincidunt nibh. Vestibulum vitae sem tortor. Nam auctor risus ut magna maximus efficitur. In at.\r\n      \r\n      ', '2025-04-24 21:56:48', NULL, 1, 8),
(16, 'Casa diseño  Moderno', 'Casa de diseño moderno, excelente ubicacion, 3 habitaciones, 2 baños, 2 plantas, 1 cochera, 150m2', 'pjl5kcokicmcoof23zsr', 200000.00, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra neque vitae augue cursus, non feugiat mauris vestibulum. Suspendisse malesuada mauris accumsan diam venenatis, non dignissim arcu pulvinar. Sed eget quam molestie, posuere elit a, tincidunt nibh. Vestibulum vitae sem tortor. Nam auctor risus ut magna maximus efficitur. In at.\r\n      \r\n      ', '2025-04-24 21:59:28', NULL, 1, 1),
(17, 'Casa de Ladrillos Vistos', 'Casa de ladrillos vistos,  excelente ubicacion, 4 habitaciones, 3 baños, 2 plantas, 2 cocheras, 250 m2', 'r1ilcs53yl2yndx4nhus', 180000.00, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra neque vitae augue cursus, non feugiat mauris vestibulum. Suspendisse malesuada mauris accumsan diam venenatis, non dignissim arcu pulvinar. Sed eget quam molestie, posuere elit a, tincidunt nibh. Vestibulum vitae sem tortor. Nam auctor risus ut magna maximus efficitur. In at.\r\n      \r\n      \r\n      \r\n      \r\n      ', '2025-04-24 22:02:27', NULL, 1, 1),
(18, 'Clasica en barrio Residencial', 'Combina elegancia y confort en una ubicación privilegiada, 2 baños, 3 habitaciones, 1 cochera doble, 250m2', 'avaeyvaxiiiu7apnskfh', 180000.00, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend turpis a dui mattis, vel gravida turpis egestas. Aenean imperdiet luctus malesuada. Integer pellentesque, turpis at lacinia maximus, justo augue lacinia felis, nec scelerisque felis nulla blandit lacus. Aliquam erat volutpat. Nunc porttitor, tortor et venenatis placerat, dolor nibh aliquam.\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      ', '2025-04-25 15:02:27', NULL, 1, 7),
(19, 'Casa a pocos pasos del mar', 'Esta encantadora casa combina comodidad y un ambiente relajado, 2 baños, 2 habitaciones, 1 cochera, 150m2', 'fz8ttse076qzaxqthghy', 125000.00, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend turpis a dui mattis, vel gravida turpis egestas. Aenean imperdiet luctus malesuada. Integer pellentesque, turpis at lacinia maximus, justo augue lacinia felis, nec scelerisque felis nulla blandit lacus. Aliquam erat volutpat. Nunc porttitor, tortor et venenatis placerat, dolor nibh aliquam.\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      \r\n      ', '2025-04-25 15:21:08', NULL, 1, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `userId` int NOT NULL,
  `usuario` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `creado` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`userId`, `usuario`, `password`, `creado`) VALUES
(1, 'exaunicen@gmail.com', '0bb09b765eea498437975aed7d72eb31', '2025-04-15 17:21:20'),
(2, 'sandraeh70@gmail.com', '0bb09b765eea498437975aed7d72eb31', '2025-04-15 17:21:20'),
(3, 'admin@supertoledo.com', '855b5226f529976417a96830d138f2f7', '2025-04-15 17:21:20'),
(4, 'miagilelt@gmail.com', '14cc776d42fd4315ebaa95488e60eb4b', '2025-04-15 17:21:20'),
(5, 'ppaves@supertoledo.com', 'ed5049f8b5d0df8ae98a4ba848ccde75', '2025-04-15 17:21:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedores`
--

CREATE TABLE `vendedores` (
  `vendedorId` int NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `apellido` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `cell` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(200) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vendedores`
--

INSERT INTO `vendedores` (`vendedorId`, `nombre`, `apellido`, `cell`, `email`) VALUES
(1, 'Jorge Ismael', 'Albarinio', '223-5131672', 'exaunicen@gmail.com'),
(3, 'Sandra Elizabeth', 'Hernandez', '223-5131672', 'sandraeh70@gmail.com'),
(7, 'Martina Elizabeth', 'Albarinio', '02235131672', 'exaunicen@gmail.com'),
(8, 'Romina Elizabeth', 'Albarinio', '02235131672', 'romixxi@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blogId`);

--
-- Indices de la tabla `propiedades`
--
ALTER TABLE `propiedades`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `vendedorId` (`vendedorId`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`userId`);

--
-- Indices de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  ADD PRIMARY KEY (`vendedorId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blog`
--
ALTER TABLE `blog`
  MODIFY `blogId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `propiedades`
--
ALTER TABLE `propiedades`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `userId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `vendedores`
--
ALTER TABLE `vendedores`
  MODIFY `vendedorId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `propiedades`
--
ALTER TABLE `propiedades`
  ADD CONSTRAINT `vendedorId` FOREIGN KEY (`vendedorId`) REFERENCES `vendedores` (`vendedorId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
