package net.beitech.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.beitech.entidades.Customer;
import net.beitech.entidades.Product;
import net.beitech.interfaces.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository repo;
	
	public List<Customer> listAll() {
		return repo.findAll(); 
	}
	
	public Optional<Customer> getCustomerById (int idCustomer) {
		Optional<Customer> customerResponse = repo.findById(idCustomer);	 
		return customerResponse;
	}
	
	
	
}
