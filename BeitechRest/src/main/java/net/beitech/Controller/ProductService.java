package net.beitech.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.beitech.entidades.Customer;
import net.beitech.entidades.Product;
import net.beitech.interfaces.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> listProducts () {
		return productRepository.findAll();
	}
	public List<Product> listProductsCustomer(Optional<Customer> customerProducts){
		List<Product> listProductos = (List<Product>) customerProducts.get();		
		return listProductos;
		
	}
}
