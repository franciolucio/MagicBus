package domain.services;

import domain.User;
import domain.repositories.UserRepository;

public class UserService extends GenericService<User>{

	private static final long serialVersionUID = 7388405495111949457L;
	
	private UserRepository userRepository;
	

	public UserService() {}

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
}