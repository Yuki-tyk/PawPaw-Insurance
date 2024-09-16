package dev.yuki.PawPaw_Insurance.catbreed;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/catBreed")
public class CatBreedController {
    private final CatBreedService catBreedService;

    public CatBreedController(CatBreedService catBreedService) {
        this.catBreedService = catBreedService;
    }

    @GetMapping
    public ResponseEntity<List<CatBreed>> getAllCatBreed() {
        return new ResponseEntity<List<CatBreed>>(catBreedService.allCatBreeds(), HttpStatus.OK);
    }

}
