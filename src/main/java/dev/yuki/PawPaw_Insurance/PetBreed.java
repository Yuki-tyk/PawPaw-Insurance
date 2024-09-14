package dev.yuki.PawPaw_Insurance;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

@AllArgsConstructor
@Data
@Getter
@Setter
public class PetBreed {
    @Id
    private ObjectId id;
    private String typeOfPet; // Dog or Cat or other types. Get from the dataset name
    private String breed;
    private Integer risk;
}
