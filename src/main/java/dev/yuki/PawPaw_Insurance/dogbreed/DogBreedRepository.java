package dev.yuki.PawPaw_Insurance.dogbreed;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DogBreedRepository extends MongoRepository<DogBreed, ObjectId> {
}
