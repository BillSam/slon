package com.slon.develop.repository;

import com.slon.develop.domain.MorningSessions;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the MorningSessions entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MorningSessionsRepository extends JpaRepository<MorningSessions, Long> {

}
