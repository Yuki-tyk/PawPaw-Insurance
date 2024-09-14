package dev.yuki.PawPaw_Insurance.catbreed;

import dev.yuki.PawPaw_Insurance.PetBreed;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "catbreeds")
public class CatBreed extends PetBreed {
    public CatBreed(ObjectId id, String breed, Integer risk) {
        super(id, "cat", breed, risk);
    }
}