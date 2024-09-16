package dev.yuki.PawPaw_Insurance.dogbreed;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/dogBreed")
public class DogBreedController {
    private final DogBreedService dogBreedService;

    public DogBreedController(DogBreedService dogBreedService) {
        this.dogBreedService = dogBreedService;
    }

    @GetMapping
    public ResponseEntity<List<DogBreed>> getAllDogBreed() {
        return new ResponseEntity<List<DogBreed>>(dogBreedService.getAllDogBreeds(),HttpStatus.OK);
    }
}
