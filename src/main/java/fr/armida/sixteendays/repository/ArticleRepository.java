package fr.armida.sixteendays.repository;

import fr.armida.sixteendays.domain.Article;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDate;
import java.util.List;

/**
 * Created by gregory on 26/03/2016.
 */
public interface ArticleRepository extends MongoRepository<Article, String> {
    List<Article> findByCreatedOn(LocalDate date);
    Article findByTitle(String title);
}
