package dev.yuki.PawPaw_Insurance.catbreed;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatBreedService {
    private CatBreedRepository catBreedRepository;

    public CatBreedService(CatBreedRepository catBreedRepository) {
        this.catBreedRepository = catBreedRepository;
    }

    public List<CatBreed> allCatBreeds() {
        return catBreedRepository.findAll();
    }
}
