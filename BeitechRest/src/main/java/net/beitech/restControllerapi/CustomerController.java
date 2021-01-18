package net.beitech.restControllerapi;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import net.beitech.Controller.CustomerService;
import net.beitech.Controller.ProductService;
import net.beitech.entidades.Customer;
import net.beitech.entidades.Product;


@RestController
@CrossOrigin(origins = "*")
public class CustomerController {

	@Autowired
	private CustomerService sCustomer ;
	
	@Autowired 
	private ProductService sProduct ;
	

	@GetMapping("/customers")
	public List<Customer> listAll () {
		List<Customer> listCustomers = sCustomer.listAll();
		listCustomers.forEach((p)->{
			p.setProducts(null);
		});
		return listCustomers;
	}


	@GetMapping("/products")
	public List<Product> listAllProducts (HttpServletRequest request) {
		int idCustomer = Integer.parseInt(request.getHeader("idCustomer"));
		Optional<Customer> customerProducts = sCustomer.getCustomerById(idCustomer);
		List<Product> listProducts = customerProducts.get().getProducts();
		listProducts.forEach((p)-> {
			p.setCustomers(null);
		});
		//List<Product> listProducts = sProduct.listProductsCustomer(customerProducts);
		return listProducts;
	}
	

}
