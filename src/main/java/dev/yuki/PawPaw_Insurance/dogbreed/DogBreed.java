package dev.yuki.PawPaw_Insurance.dogbreed;

import dev.yuki.PawPaw_Insurance.PetBreed;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "dogbreeds")
public class DogBreed extends PetBreed {
    public DogBreed(ObjectId id, String breed, Integer risk) {
        super(id, "dog", breed, risk);
    }
}
