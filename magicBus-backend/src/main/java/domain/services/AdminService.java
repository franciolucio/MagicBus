package domain.services;

import org.springframework.transaction.annotation.Transactional;

import domain.Admin;
import domain.repositories.AdminRepository;

public class AdminService extends GenericService<Admin> {

	private static final long serialVersionUID = 7503982532208298455L;
	
	private AdminRepository adminRepository;
	
	public AdminService() {}

	public AdminService(AdminRepository adminRepository) {
		this.adminRepository = adminRepository;
	}

	public AdminRepository getAdminRepository() {
		return adminRepository;
	}

	public void setAdminRepository(AdminRepository adminRepository) {
		this.adminRepository = adminRepository;
	}

	@Transactional
	public Admin findAdminByEmail(String email) {
		return getAdminRepository().getAdminByEmail(email);
	}

}
