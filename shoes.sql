
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";




CREATE TABLE `shoes` (
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `yearModel` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `image` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `shoes` (`title`, `description`, `yearModel`, `size`, `id`, `createdAt`, `updatedAt`, `image`) VALUES
('qwwer', 'sddsdsdf', '111', 12, 10, '2023-05-24 17:46:44', '2023-05-24 17:46:44', ''),
('qqqqq', '232322', '123', 12, 12, '2023-05-24 17:52:26', '2023-05-24 17:52:26', 'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_24315b6a-e3d5-4522-89c9-bed4de1fba66_540x.jpg?v=1656278007');


ALTER TABLE `shoes`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `shoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

