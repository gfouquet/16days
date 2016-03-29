package fr.armida.sixteendays.domain;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

/**
 * Created by gregory on 26/03/2016.
 */
public class Article {
    @Id // this annotation is optional
    private String id;

    @NotBlank
    private String title;

    @NotNull
    private LocalDateTime createdOn = LocalDateTime.now();

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getCreatedOn() {
        return createdOn;
    }
}
