package dev.yuki.PawPaw_Insurance.catbreed;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatBreedRepository extends MongoRepository<CatBreed, ObjectId> {
}
