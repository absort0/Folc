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
        if ( in_array( $wgTitle->getFullText(), ['Dance', 'Art', 'Belief','Craftsmanship and Practices', 'Entertainment and Recreation', 'Food', 'Music', 'Ritual', 'Verbal Arts and Literature' ] ) ) {
            $data['category_page'] = true;
        } else if ( !$wgTitle->isMainPage() && $wgTitle->getNamespace() == 0 ) {


            $lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
            $dbr = $lb->getConnectionRef( DB_REPLICA );
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
                $data['img'] = $row->Media_URL;

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