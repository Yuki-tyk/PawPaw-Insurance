package dev.yuki.PawPaw_Insurance.insurance;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InsuranceRepository extends MongoRepository<Insurance, ObjectId> {

}
