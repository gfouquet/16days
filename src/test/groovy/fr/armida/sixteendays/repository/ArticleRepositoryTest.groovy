package fr.armida.sixteendays.repository

import fr.armida.sixteendays.SixteenDays
import fr.armida.sixteendays.domain.Article
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.SpringApplicationConfiguration
import org.springframework.data.mongodb.core.MongoTemplate
import spock.lang.Specification

import java.time.LocalDate

/**
 * Created by gregory on 26/03/2016.
 */
@SpringApplicationConfiguration(SixteenDays)
class ArticleRepositoryTest extends Specification {
    @Autowired
    ArticleRepository repository

    @Autowired
    MongoTemplate mongoTemplate;

    def cleanup() {
        // mongo cannot be rolled back -> drop db
        mongoTemplate.db.dropDatabase()
    }

    def "should find article by title"() {
        given:
        def art = new Article(title: "Random thoughts...")
        repository.save(art)

        expect:
        repository.findByTitle("Random thoughts...") != null
    }

    def "should find articles by date"() {
        given:
        def art = new Article(title: "" + Math.random())
        repository.save(art)

        and:
        art = new Article(title: "" + Math.random())
        repository.save(art)

        expect:
        repository.findByCreatedOn(LocalDate.now()).size() == 2
    }
}
