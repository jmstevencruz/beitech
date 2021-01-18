package net.beitech.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import net.beitech.entidades.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{

}
