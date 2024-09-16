package dev.yuki.PawPaw_Insurance.insurance;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InsuranceService {
    private final InsuranceRepository insuranceRepository;

    public InsuranceService(InsuranceRepository insuranceRepository) {
        this.insuranceRepository = insuranceRepository;
    }

    public List<Insurance> allInsurance() {
        return insuranceRepository.findAll();
    }
}
