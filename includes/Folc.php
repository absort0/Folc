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
                $data['countries'] = explode( ',', $row->Country__full );
                $data['sdg'] = explode( ',', $row->SDG__full );
                $data['img'] = $row->Media_URL;
                $subjects = explode( ',', $row->Subject__full );

                foreach( $subjects as $subject ) {
                    $data['subjects'][] = [
                        'subject_name_lower' => strtolower( $subject ),
                        'subject_name' => $subject
                    ];
                }
            }
        }
        return $data;
    }
}