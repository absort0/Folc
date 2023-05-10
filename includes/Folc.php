<?php

namespace MediaWiki\Skins\Folc;

use MediaWiki\MediaWikiServices;
use SkinMustache;
use SkinTemplate;

class Folc extends SkinMustache {
    
    /**
     * Extends the getTemplateData function to add a template key 'html-myskin-hello-world'
     * which can be rendered in skin.mustache using {{{html-myskin-hello-world}}}
     */
    public function getTemplateData() {
        global $wgTitle;

        $data = parent::getTemplateData();
        $data['pagetitle'] = $wgTitle->getFullText(); // or $this->msg('msg-key')->parse();
        $data['pagetitle_smallcase'] = strtolower( $wgTitle->getFullText() );

        $data['country_page'] = false;

        $categories = ['Dance', 'Art', 'Belief','Craftsmanship and Practices', 'Entertainment and Recreation', 'Food', 'Music', 'Ritual', 'Verbal Arts and Literature' ];

        $lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
        $dbr = $lb->getConnectionRef( DB_REPLICA );

        $countries = $dbr->newSelectQueryBuilder()
            ->select( '*' )
            ->from( 'cargo__' . 'Country' )
            ->where(['_pageID > 0'] )
            ->caller( __METHOD__ )
            ->fetchResultSet();

        foreach( $countries as $country ){

             $country_pages = $dbr->newSelectQueryBuilder()       
                ->select( '*' )
                ->from( 'cargo__' . 'Articles' )
                ->where(['Country__full LIKE "' . $country->Country . '"'] )
                ->caller( __METHOD__ )       
                ->fetchResultSet();

            $data[$country->Continent][] = [ 'country' => $country->Country, 'count' => $country_pages->numRows() ];
            if ( $wgTitle->getFullText() == $country->Country ) {
                $data['country_page'] = true;
            }
        }


        if ( $data['country_page'] ) {
            foreach( $categories as $category ){

                 $category_pages = $dbr->newSelectQueryBuilder()       
                    ->select( '*' )
                    ->from( 'cargo__' . 'Articles' )
                    ->where(['Country__full LIKE "' . $wgTitle->getFullText() . '"', 'Subject__full LIKE "' . $category . '"'] )
                    ->caller( __METHOD__ )       
                    ->fetchResultSet();

                foreach( $category_pages as $page ) {
                    $data[$category . '_filtered'][] = Title::newFromID( $page->_pageID )->getFullText();
                }
            }
        } else if ( in_array( $wgTitle->getFullText(), $categories ) ) {
            $data['category_page'] = true;

            foreach( $countries as $country ){

                 $country_pages = $dbr->newSelectQueryBuilder()       
                    ->select( '*' )
                    ->from( 'cargo__' . 'Articles' )
                    ->where(['Country__full LIKE "' . $country->Country . '"', 'Subject__full LIKE "' . $wgTitle->getFullText() . '"'] )
                    ->caller( __METHOD__ )       
                    ->fetchResultSet();

                $data[$country->Continent . '_filtered'][] = [ 'country' => $country->Country, 'count' => $country_pages->numRows() ];
            }

        } else if ( !$wgTitle->isMainPage() && $wgTitle->getNamespace() == 0 ) {


            $res = $dbr->newSelectQueryBuilder()
                ->select( '*' )
                ->from( 'cargo__' . 'Articles' )
                ->where( [ '_pageID' => $wgTitle->getId() ] )
                ->caller( __METHOD__ )
                ->fetchResultSet();

            $data['article_page'] = true;
            foreach( $res as $row ) {
                if ( !empty( $row->Tags__full ) ) {
                    $data['tags'] = explode( ',', $row->Tags__full );
                }
                if ( !empty( $row->Country__full ) ) {
                    $data['countries'] = explode( ',', $row->Country__full );
                }
                if ( !empty( $row->Region__full ) ) {
                    $data['regions'] = explode( ',', $row->Region__full );
                }
                $data['sdg'] = explode( ',', $row->SDG__full );
                if ( !empty( $row->File ) ) {
                    $file = \wfFindFile( $row->File );
                    $data['img'] = $file->getFullUrl();
                }

                if ( !empty( $row->Subject__full ) ) {
                    $subjects = explode( ',', $row->Subject__full );

                    foreach( $subjects as $subject ) {
                        $data['subjects'][] = [
                            'subject_name_lower' => explode( ' ', trim( strtolower( $subject ) ) )[0],
                            'subject_name' => trim( ucwords( $subject ) )
                        ];
                    }
                }
            }
        }
        return $data;
    }
}