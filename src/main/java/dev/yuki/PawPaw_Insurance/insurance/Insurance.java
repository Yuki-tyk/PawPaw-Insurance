package dev.yuki.PawPaw_Insurance.insurance;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document(collection = "insurance")
@Data
@AllArgsConstructor
@Getter
@Setter
public class Insurance {
    @Id
    private ObjectId id;
    private String name;
    private Integer annualCoverage;
    private Map<String, Integer> base;

}
