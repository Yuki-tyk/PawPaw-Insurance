package dev.yuki.PawPaw_Insurance.dogbreed;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DogBreedService {
    private DogBreedRepository dogBreedRepository;

    public DogBreedService(DogBreedRepository dogBreedRepository) {
        this.dogBreedRepository = dogBreedRepository;
    }

    public List<DogBreed> getAllDogBreeds() {
        return dogBreedRepository.findAll();
    }
}
