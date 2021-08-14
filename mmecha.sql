-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-08-2021 a las 06:45:31
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mmecha`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`, `ts_create`, `ts_update`) VALUES
(1, 'Buzo', '2021-08-07 11:07:46', '2021-08-07 11:07:46'),
(2, 'Remera', '2021-08-07 11:08:50', '2021-08-07 11:08:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `imagen` varchar(11) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `id_categoria`, `precio`, `imagen`, `eliminado`, `ts_create`, `ts_update`) VALUES
(7, 'parce', 1, 3850, '', 0, '2021-06-27 16:11:48', '2021-07-26 00:30:28'),
(9, 'wossy', 1, 3850, '', 0, '2021-06-27 16:16:30', '2021-07-26 00:29:54'),
(10, 'retro', 1, 3900, '', 0, '2021-06-27 16:38:18', '2021-07-26 00:30:02'),
(11, 'fase1', 1, 3900, '', 0, '2021-06-27 16:39:15', '2021-08-07 13:13:13'),
(12, 'chicle', 1, 3700, '', 0, '2021-06-27 16:39:47', '2021-07-25 21:17:40'),
(13, 'agua', 1, 3800, '', 0, '2021-06-27 16:40:04', '2021-07-26 00:30:21'),
(14, 'byn', 1, 3751, '', 0, '2021-06-27 16:40:30', '2021-08-07 12:54:14'),
(59, 'img', 1, 543, '', 1, '2021-07-29 19:14:05', '2021-08-08 14:22:17'),
(60, 'img', 1, 543, '', 1, '2021-07-29 19:14:05', '2021-08-08 14:22:18'),
(61, 'IMG', 2, 543, '', 1, '2021-07-29 19:22:07', '2021-08-08 14:22:19'),
(89, 'test90', 2, 908070, '', 1, '2021-07-30 17:15:43', '2021-08-08 14:22:20'),
(90, 'test91', 1, 878787, '', 1, '2021-07-30 17:17:58', '2021-08-08 14:22:20'),
(95, 'solo 1', 1, 987, '', 1, '2021-07-30 17:26:25', '2021-08-08 14:22:20'),
(154, 'asd', 1, 234, '', 1, '2021-08-07 09:08:41', '2021-08-08 14:22:24'),
(155, 'asd', 1, 234, '', 1, '2021-08-07 09:08:41', '2021-08-08 14:22:25'),
(156, '234', 2, 234, '', 1, '2021-08-07 09:14:15', '2021-08-07 14:13:42'),
(157, '234', 2, 234, '', 1, '2021-08-07 09:14:15', '2021-08-07 14:13:40'),
(158, 'alonsoo', 1, 123, '', 1, '2021-08-07 09:18:40', '2021-08-07 14:13:37'),
(159, 'alonsoo', 1, 123, '', 1, '2021-08-07 09:18:40', '2021-08-07 14:13:35'),
(160, 'conIMG', 0, 123, '', 1, '2021-08-07 10:38:23', '2021-08-07 14:13:33'),
(161, 'conIMG', 0, 123, '', 1, '2021-08-07 10:38:23', '2021-08-07 14:13:30'),
(162, '999', 0, 234, '', 1, '2021-08-07 11:02:32', '2021-08-07 14:13:27'),
(163, '999', 0, 234, '', 1, '2021-08-07 11:02:32', '2021-08-07 14:13:23'),
(164, 'alon', 2, 123, '', 1, '2021-08-07 11:09:40', '2021-08-07 14:13:25'),
(165, 'alon', 2, 123, '', 1, '2021-08-07 11:09:40', '2021-08-07 14:13:21'),
(166, '1', 1, 2, '', 1, '2021-08-07 11:13:52', '2021-08-07 14:41:27'),
(167, '1', 1, 2, '', 1, '2021-08-07 11:13:52', '2021-08-07 14:41:28'),
(168, 'test2', 1, 123, '', 1, '2021-08-07 11:21:37', '2021-08-07 14:41:23'),
(169, 'test2', 1, 123, '', 1, '2021-08-07 11:21:37', '2021-08-07 14:41:25'),
(170, 'Only 1', 1, 1123, '', 1, '2021-08-07 11:34:39', '2021-08-07 14:41:21'),
(171, 'Only 1', 1, 1123, '', 1, '2021-08-07 11:34:39', '2021-08-07 14:41:19'),
(172, 'un producto', 2, 123, '', 1, '2021-08-07 11:41:01', '2021-08-07 14:41:15'),
(173, 'un producto', 2, 123, '', 1, '2021-08-07 11:41:01', '2021-08-07 14:41:17'),
(174, '1', 1, 123, '', 1, '2021-08-07 11:52:53', '2021-08-08 14:22:25'),
(175, '1', 1, 123, '', 1, '2021-08-07 11:52:53', '2021-08-08 14:22:26'),
(176, 'asd1', 1, 123, '', 1, '2021-08-07 11:53:27', '2021-08-08 14:22:17'),
(177, 'asd1', 1, 123, '', 1, '2021-08-07 11:53:27', '2021-08-08 14:22:26'),
(178, '2', 1, 123, '', 1, '2021-08-07 11:57:44', '2021-08-08 14:22:23'),
(179, '2', 1, 123, '', 1, '2021-08-07 11:57:44', '2021-08-08 14:22:27'),
(180, 'asd', 1, 5, '', 1, '2021-08-07 12:02:26', '2021-08-08 14:22:27'),
(181, 'asd', 1, 5, '', 1, '2021-08-07 12:02:26', '2021-08-08 14:22:27'),
(182, '01', 1, 123, '', 1, '2021-08-07 12:04:51', '2021-08-08 14:22:28'),
(183, '001', 1, 123, '', 1, '2021-08-07 12:08:43', '2021-08-08 14:22:28'),
(184, '001', 1, 123, '', 1, '2021-08-07 12:08:43', '2021-08-08 14:22:29'),
(185, '123', 2, 1, '', 1, '2021-08-07 12:15:51', '2021-08-08 14:22:30'),
(186, '123', 1, 123, '', 1, '2021-08-07 12:18:18', '2021-08-08 14:22:14'),
(187, '123', 1, 123, '', 1, '2021-08-07 12:18:18', '2021-08-08 14:22:30'),
(188, 'test 5k', 1, 123, '', 1, '2021-08-08 11:11:37', '2021-08-08 14:22:32'),
(189, 'test 5k', 1, 123, '', 1, '2021-08-08 11:11:37', '2021-08-08 14:22:34'),
(190, '123', 1, 123, '', 0, '2021-08-08 11:22:54', '2021-08-08 14:22:54'),
(191, '123', 1, 123, '', 0, '2021-08-08 11:22:54', '2021-08-08 14:22:54'),
(192, 'tester', 1, 2, '', 1, '2021-08-08 11:45:42', '2021-08-08 19:06:56'),
(193, 'tester', 1, 2, '', 1, '2021-08-08 11:45:42', '2021-08-08 19:06:46'),
(194, 'asd', 1, 123, '', 0, '2021-08-08 16:07:19', '2021-08-08 19:07:19'),
(195, 'asd', 1, 123, '', 0, '2021-08-08 16:07:19', '2021-08-08 19:07:19'),
(196, 'test2', 1, 32, '', 0, '2021-08-08 16:08:28', '2021-08-08 19:08:28'),
(197, 'test2', 1, 32, '', 0, '2021-08-08 16:08:28', '2021-08-08 19:08:28'),
(198, 'test2', 1, 12323, '', 0, '2021-08-08 16:10:15', '2021-08-08 19:10:15'),
(199, 'test2', 1, 12323, '', 0, '2021-08-08 16:10:15', '2021-08-08 19:10:15'),
(200, 'asd', 1, 2134, '', 0, '2021-08-08 16:12:17', '2021-08-08 19:12:17'),
(201, 'asd', 1, 2134, '', 0, '2021-08-08 16:12:17', '2021-08-08 19:12:17'),
(202, 'test2', 1, 234, '', 0, '2021-08-08 16:14:07', '2021-08-08 19:14:07'),
(203, 'test2', 1, 234, '', 0, '2021-08-08 16:14:07', '2021-08-08 19:14:07'),
(204, '123', 1, 123, '', 0, '2021-08-10 12:04:44', '2021-08-10 15:04:44'),
(205, '123', 1, 123, '', 0, '2021-08-10 12:04:44', '2021-08-10 15:04:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productosimg`
--

CREATE TABLE `productosimg` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_producto` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `confirmacionCorreo` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono` int(11) NOT NULL,
  `admin` int(11) NOT NULL DEFAULT 0,
  `habilitado` tinyint(4) NOT NULL DEFAULT 0,
  `eliminado` int(11) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `pass`, `mail`, `confirmacionCorreo`, `telefono`, `admin`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(16, 'ataverna', 'ec4c8836db96b8aca8381c7c64bb095ba46d5e28', 'alonsotaverna@hotmail.com', '218dbd36-9fac-4ec7-b9ba-132c7d58fa6d', 1234, 0, 1, 0, '2021-07-21 10:04:35', '2021-07-21 10:05:26'),
(17, 'prueba', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 'ataverna@gmail.com', 'c7bfe223-27f4-43e2-b9c2-e2ca4e6420ce', 1234, 1, 1, 0, '2021-07-22 10:15:47', '2021-08-10 12:51:01'),
(18, 'user1', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 'asd@asd.com', 'df14f3c0-2d7c-48be-aa56-fa2b3d23dcd2', 123, 0, 0, 0, '2021-07-22 23:23:25', '2021-07-22 23:23:25');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`),
  ADD KEY `id_categoria_2` (`id_categoria`);

--
-- Indices de la tabla `productosimg`
--
ALTER TABLE `productosimg`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=206;

--
-- AUTO_INCREMENT de la tabla `productosimg`
--
ALTER TABLE `productosimg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productosimg`
--
ALTER TABLE `productosimg`
  ADD CONSTRAINT `productosimg_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
