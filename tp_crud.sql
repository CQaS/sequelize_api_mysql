-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-06-2023 a las 03:19:40
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp_crud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animale`
--

CREATE TABLE `animale` (
  `id` int(11) NOT NULL,
  `raza` varchar(50) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `tieneDuenio` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `animale`
--

INSERT INTO `animale` (`id`, `raza`, `edad`, `color`, `tieneDuenio`) VALUES
(1, 'dogo', 12, 'blanco', 1),
(2, 'caniche', 4, 'negro', 0),
(3, 'salchicha', 1, 'marron', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aviones`
--

CREATE TABLE `aviones` (
  `id` int(11) NOT NULL,
  `plazas` int(11) DEFAULT NULL,
  `empresa` varchar(50) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `aviones`
--

INSERT INTO `aviones` (`id`, `plazas`, `empresa`, `activo`) VALUES
(1, 230, 'AirONE', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `profesion` varchar(50) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT NULL,
  `sexo` enum('ENUM1','ENUM2','ENUM3') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `edad`, `profesion`, `activo`, `sexo`) VALUES
(1, 'Jose Fernandez', 40, 'Desarrollador', 1, 'ENUM2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motos`
--

CREATE TABLE `motos` (
  `id` int(11) NOT NULL,
  `Marca` varchar(50) DEFAULT NULL,
  `color` enum('ENUM1','ENUM2','ENUM3') DEFAULT NULL,
  `modelo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `motos`
--

INSERT INTO `motos` (`id`, `Marca`, `color`, `modelo`) VALUES
(1, 'Yamaha', 'ENUM2', '1999'),
(2, 'Toyoma', 'ENUM3', '2023');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id` int(11) NOT NULL,
  `recurso` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `permiso_otorgados` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id`, `recurso`, `id_usuario`, `permiso_otorgados`) VALUES
(33, 'productos', 1, 'C-R-U-D'),
(34, 'productos', 8, 'X-R-X-X'),
(43, 'aviones', 1, 'C-R-U-D'),
(44, 'aviones', 8, 'X-R-X-X'),
(45, 'animale', 8, 'X-R-X-X'),
(46, 'animale', 10, 'X-R-X-X'),
(47, 'animale', 1, 'C-R-U-D'),
(48, 'restaurantes', 8, 'X-R-X-X'),
(49, 'restaurantes', 1, 'C-R-U-D'),
(50, 'restaurantes', 10, 'C-R-U-D'),
(51, 'motos', 1, 'C-R-U-D'),
(52, 'motos', 10, 'C-X-X-X'),
(53, 'empleados', 1, 'C-R-U-D'),
(54, 'empleados', 8, 'C-R-X-X'),
(55, 'empleados', 10, 'X-R-X-X');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `vencido` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `stock`, `nombre`, `vencido`) VALUES
(2, 45, 'fideos coditos', 1),
(3, 170, 'Mermelada Orieta', 0),
(4, 1500, 'Azucar Ledezma', 0),
(5, 125, 'aceite patitoss', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurantes`
--

CREATE TABLE `restaurantes` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `horarios` varchar(50) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `nro` int(11) DEFAULT NULL,
  `abierto` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `restaurantes`
--

INSERT INTO `restaurantes` (`id`, `Nombre`, `horarios`, `direccion`, `nro`, `abierto`) VALUES
(1, 'La Farola', 'lunes a viernes - 12 a 22', 'Rotonda ingreso', 123, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `mail` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_spanish_ci NOT NULL DEFAULT '1234'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `telefono`, `mail`, `password`) VALUES
(1, 'Myriam', '2664301031', 'myriam@mail.com', 'sha1$95013d70$1$e48f66444647a69b47b422b7b5404c09eb1f10ca'),
(8, 'Yam', '019283746', 'yam@mail.com', 'sha1$d0d81fb8$1$c8d15b30862fdc5a3bc7b3413fab38ac4ea740a1'),
(10, 'Fiamma', '23344567', 'fiamma@mail.com', 'sha1$1fef6486$1$8c762fc3638bc8531b2e64ea0acbc705aae08535'),
(62452, 'Eze Cuello', '0192837465', 'eze@mail.com', 'sha1$fb7ee514$1$bde8b92fcaa5364a2f9295e0452f916e720ff90b');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `animale`
--
ALTER TABLE `animale`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `aviones`
--
ALTER TABLE `aviones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `motos`
--
ALTER TABLE `motos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `restaurantes`
--
ALTER TABLE `restaurantes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `animale`
--
ALTER TABLE `animale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `aviones`
--
ALTER TABLE `aviones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `motos`
--
ALTER TABLE `motos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `restaurantes`
--
ALTER TABLE `restaurantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62453;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD CONSTRAINT `permisos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
