package fr.armida.sixteendays.repository

import fr.armida.sixteendays.SixteenDays
import fr.armida.sixteendays.domain.Article
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.SpringApplicationConfiguration
import org.springframework.data.mongodb.core.MongoTemplate
import spock.lang.Specification

import javax.validation.ConstraintViolationException
import java.time.LocalDate
import java.time.LocalDateTime

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

    def "article title should not be blank"() {
        given:
        def art = new Article(title: "")

        when:
        repository.save(art)

        then:
        thrown(ConstraintViolationException)
    }

    def "article date should not be null"() {
        given:
        def art = new Article(title: "title", createdOn: null)

        when:
        repository.save(art)

        then:
        thrown(ConstraintViolationException)
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
        def now = LocalDateTime.now()
        def art = new Article(title: "" + Math.random(), createdOn: now)
        repository.save(art)

        and:
        art = new Article(title: "" + Math.random(), createdOn: now)
        repository.save(art)

        expect:
        repository.findByCreatedOn(now).size() == 2
    }
}
