package net.beitech.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import net.beitech.entidades.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
