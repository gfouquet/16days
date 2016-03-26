package fr.armida.sixteendays.domain;

import java.time.LocalDate;

/**
 * Created by gregory on 26/03/2016.
 */
public class Article {
    private String id;
    private String title;
    private LocalDate createdOn = LocalDate.now();

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getCreatedOn() {
        return createdOn;
    }
}
